import {connect} from 'react-redux';
import {Link} from '../../components/link';
import {getSessions} from '../../actions/sessions';
import {setDay, setFilteredList, setLanguage, setShow} from '../../actions/filters';
import {Section} from '../../components/Section/Section.js';
import PageHeader from '../../components/PageHeader/PageHeader.js';
import {CheckCircle, Circle, Clock, Globe, PlayCircle, User, Users} from 'react-feather';
import Page from '../../components/Page/Page';
import {Col, Grid, Row} from 'react-flexbox-grid';
import * as React from 'react';
import {compose, filter, find, get, groupBy, includes, join, last, map, orderBy, reduce, without} from 'lodash/fp';
import Loader from '../../components/Loader/Loader.js';
import './Program.less';

const SETTINGS_KEY = 'programsettings_v3';

const defaultSettings = {
    favorites: []
};

function getDefaultSettings() {
    try {
        const settings = localStorage.getItem(SETTINGS_KEY);
        if (!settings) {
            return defaultSettings;
        }

        return JSON.parse(settings);
    } catch (e) {
        return defaultSettings;
    }
}

function saveSettings(settings) {
    try {
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch (e) {
        console.warn('Kunne i lagre filteret for programmet', e);
    }
}

const Failure = () => (
    <div className='program__loading'>
        <h2 className='program__loading-header'>Feil!</h2>
        En feil har oppstått, prøvd igjen senere.
    </div>
);

function generateSpeakersString(speakers: []): string {
    let speakersCombined = '';
    speakers.forEach((speaker, idx) => (idx < speakers.length-1) ? speakersCombined += `${speaker.name}, ` : speakersCombined += speaker.name);
    return speakersCombined;
}

const sessionFormat = (format) => {
    if (format === 'presentation') return 'Presentasjon';
    if (format === 'lightning-talk') return 'Lyntale';
    return 'Workshop';
};


type SessionItemProps = {
    session: {};
    favorites: [];
    addToFav: (session) => {};
}

function SessionItem(props: SessionItemProps) {
    const isFavorite = props.favorites.findIndex(fav => fav.sessionId === props.session.sessionId);
    return (
        <div key={props.session.sessionId} className={`${isFavorite >= 0 ? 'program-simple-session-item-fav' : 'program-simple-session-item'}`}>
            <Row>
                <Col xs={12} sm={10} md={11} lg={11}>
                    <Row className="program-simple-session-title">
                        {props.session.sessionId ? <Link href={`/program/${props.session.sessionId}`}>{props.session.title}</Link> : props.session.title}

                    </Row>
                    <Row>
                        <Col className="program-margin-right-speaker">
                            {props.session.speakers.length > 1 ? generateSpeakersString(props.session.speakers) : props.session.speakers[0].name}
                        </Col>
{/*
                        <Col className="program-margin-right">
                            <strong>{sessionFormat(props.session.format)}</strong>
                        </Col>
*/}
                        <Col className="program-margin-right">
                            {props.session.room}
                        </Col>
{/*
                        <Col className="program-margin-right">
                            {props.session.language === 'en' ? 'Engelsk' : 'Norsk'}
                        </Col>
*/}
                        <Col>
                            {props.session.length ? `${props.session.length} Minutter` : null}
                        </Col>
                    </Row>
                </Col>
                {props.session.sessionId ?
                <Col sm={2} md={1} lg={1}>
                     <Row className="program-favorite-button" center="xs" middle="xs">
                        <button onClick={() => {props.addToFav(props.session)}}>
                            {isFavorite >= 0 ? <CheckCircle size={32} /> : <Circle size={32} />}
                        </button>
                    </Row>
                </Col> : null}
            </Row>
        </div>
    );
}


function groupByTimeSlot(sessions) {
    const sorted = sessions.sort(function(a, b) {
        return new Date(a.startTime) - new Date(b.startTime);
    });
    const grouped = sorted.reduce(function(rv, x) {
        (rv[x['startTime']] = rv[x['startTime']] || []).push(x);
        return rv;
    }, {});
    return grouped;
}

type DayProps = {
    sessions: [];
    favorites: [];
    addToFav: (session) => {};
}

function Wednesday(props: DayProps) {
    const filteredList = props.sessions.filter(session => session.startTime.startsWith('2019-05-08'));
    const timeSlots = groupByTimeSlot(filteredList);
    return (
        filteredList.length > 0 ?
        <div>
            <h1 className="program-day-header">Onsdag</h1>
            {Object.keys(timeSlots).map((timeSlot, idx) => {
                return <div key={timeSlot + idx}>
                    <h1 className="program-day-timeslot">{timeSlot.substr(-5)}</h1>
                    {timeSlots[timeSlot].map((session, idx) => {
                        return <SessionItem favorites={props.favorites} addToFav={props.addToFav} key={session.sessionId} session={session} />
                    })}
                </div>
            })}
        </div> : null
    );
}

function Tuesday(props: DayProps) {
    const filteredList = props.sessions.filter(session => session.startTime.startsWith('2019-05-07'));
    const timeSlots = groupByTimeSlot(filteredList);
    return (
        filteredList.length > 0 ?
            <div>
                <h1 className="program-day-header">Tirsdag</h1>
                {Object.keys(timeSlots).map((timeSlot, idx) => {
                    return <div key={timeSlot + idx}>
                        <h1 className="program-day-timeslot">{timeSlot.substr(-5)}</h1>
                        {timeSlots[timeSlot].map((session, idx) => {
                            return <SessionItem favorites={props.favorites} addToFav={props.addToFav} key={session.sessionId} session={session} />
                        })}
                    </div>
                })}
            </div> : null
    );
}


type SimpleSessionListProps = {
    sessions: [];
    favorites: [];
    type: string;
    addToFav: (session) => {};
}

function SimpleSessionList(props: SimpleSessionListProps) {
    let filteredList = (props.type !== 'all' && props.type !== 'fav') ? props.sessions.filter(session => {
        return session.format === props.type;
    }) : props.sessions;
    if (props.type === 'fav') {
        filteredList = props.favorites;
    }
    return (
        <div className="program-list">
            <Tuesday favorites={props.favorites} addToFav={props.addToFav} sessions={filteredList} />
            <Wednesday favorites={props.favorites} addToFav={props.addToFav} sessions={filteredList} />
        </div>
    );
};

function Filter(sessions, state, props, addToFav, toggleFavorite, setAll, setPresentation, setLightningTalk, setWorkshop, toggleTue, toggleWed, toggleNorwegian, toggleEnglish) {
    return (
        <div className="program-filter-container">
             <Section className='program-filter' pixel alternate>
                <Row className='program-filter'>
                    <Col lg>
                        <Row>
                            <Col>
                                <div className="program-filter-spacing">
                                    <div className='program-filter-header'>Dag</div>
                                    <div className='program-filter-button-group'>
                                        <button className={`program-filter-button ${props.day === 'tue' ? 'enabled' : ''}`} onClick={toggleTue}>Tirsdag</button>
                                        <button className={`program-filter-button ${props.day === 'wed' ? 'enabled' : ''}`} onClick={toggleWed}>Onsdag</button>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <div className='program-filter-header'>Språk</div>
                                    <div className='program-filter-button-group'>
                                        <button className={`program-filter-button ${props.language === 'no' ? 'enabled' : ''}`} onClick={toggleNorwegian}>Norsk</button>
                                        <button className={`program-filter-button ${props.language === 'en' ? 'enabled' : ''}`} onClick={toggleEnglish}>Engelsk</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div>
                            <div className='program-filter-header'>Format</div>
                            <div className='program-filter-button-group'>
                                <button className={`program-filter-button ${props.show === 'all' ? 'enabled' : ''}`} onClick={setAll}>Alle ({sessions.length})</button>
{/*
                                <button className={`program-filter-button ${props.show === 'presentation' ? 'enabled' : ''}`} onClick={setPresentation}>Presentations ({sessions.filter(session => session.format === 'presentation').length})</button>
                                <button className={`program-filter-button ${props.show === 'lightning-talk' ? 'enabled' : ''}`} onClick={setLightningTalk}>Lightning Talks ({sessions.filter(session => session.format === 'lightning-talk').length})</button>
                                <button className={`program-filter-button ${props.show === 'workshop' ? 'enabled' : ''}`} onClick={setWorkshop}>Workshops ({sessions.filter(session => session.format === 'workshop').length})</button>
*/}
                                <button className={`program-filter-button ${props.show === 'fav' ? 'enabled' : ''}`} onClick={toggleFavorite}>Favoritter ({state.favorites.length})</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Section>
            {props.isFetching ? <Section class="program-loader" dark><Loader /></Section> :
            <Section className='program-list'>
                <SimpleSessionList favorites={state.favorites} addToFav={addToFav} type={props.show} sessions={sessions} />
            </Section>}
        </div>
    );
}

type ProgramProps = {
    sessions:  [],
    isFetching: boolean,
    failure: any,
    getSessions: Function,
    setLanguage: Function,
    setShow: Function,
    setDay: Function,
    setFilteredList: Function,
    language: string,
    show: string,
    day: string,
    filteredList: []
};

type ProgramState = {
    favorites: [];
}

class Program extends React.Component<ProgramProps, ProgramState> {

    setAll: Function;
    setPresentation: Function;
    setLightningTalk: Function;
    setWorkshop: Function;
    toggleNorwegian: Function;
    toggleEnglish: Function;
    toggleFavorite: Function;
    toggleTue: Function;
    toggleWed: Function;
    updateFilteredSessions: Function;
    addToFav: Function;

    state = getDefaultSettings();

    constructor(props: ProgramProps) {
        super(props);
        this.setAll = this.setAll.bind(this);
        this.setPresentation = this.setPresentation.bind(this);
        this.setLightningTalk = this.setLightningTalk.bind(this);
        this.setWorkshop = this.setWorkshop.bind(this);
        this.toggleNorwegian = this.toggleNorwegian.bind(this);
        this.toggleEnglish = this.toggleEnglish.bind(this);
        this.toggleFavorite = this.toggleFavorite.bind(this);
        this.toggleTue = this.toggleTue.bind(this);
        this.toggleWed = this.toggleWed.bind(this);
        this.updateFilteredSessions = this.updateFilteredSessions.bind(this);
        this.addToFav = this.addToFav.bind(this);
    }

    componentWillMount() {
        if (this.props.sessions.length === 0) {
            this.props.getSessions();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.sessions !== prevProps.sessions) {
            this.updateFilteredSessions();
        }
        if (this.props.language !== prevProps.language || this.props.show !== prevProps.show || this.props.day !== prevProps.day) {
            this.updateFilteredSessions();
        }
    }

    updateFilteredSessions() {
        let updatedFilter = [...this.props.sessions];
        if (this.props.day !== '') {
            if (this.props.day === 'wed') {
                updatedFilter = updatedFilter.filter(session => session.startTime.startsWith('2019-05-08'));
            } else {
                updatedFilter = updatedFilter.filter(session => session.startTime.startsWith('2019-05-07'));
            }
        }
        if (this.props.language !== '') {
            updatedFilter = updatedFilter.filter(session => session.language === this.props.language);
        }
        this.props.setFilteredList(updatedFilter);
    }

    addToFav(favSession) {
        const exists = this.state.favorites.findIndex(fav => fav.sessionId === favSession.sessionId);
        if (exists >= 0) {
            const removed = [...this.state.favorites];
            removed.splice(exists, 1);
            this.setState({
                favorites: removed
            });
        } else {
            const added = [...this.state.favorites];
            added.push(favSession);
            this.setState({
                favorites: added
            });
        }
    }

    toggleTue() {
        this.props.setDay(this.props.day === 'tue' ? '' : 'tue');
    }

    toggleWed() {
        this.props.setDay(this.props.day === 'wed' ? '' : 'wed');
    }

    setAll() {
        this.props.setShow('all');
    }

    setPresentation() {
        this.props.setShow('presentation');
    }

    setLightningTalk() {
        this.props.setShow('lightning-talk');
    }

    setWorkshop() {
        this.props.setShow('workshop');
    }

    toggleNorwegian() {
        this.props.setLanguage(this.props.language === 'no' ? '' : 'no');
    }

    toggleEnglish() {
        this.props.setLanguage(this.props.language === 'en' ? '' : 'en');
    }

    toggleFavorite() {
        this.props.setShow('fav');
    }

    render() {

        const content = this.props.failure
            ? <Failure />
            : Filter(
                this.props.filteredList,
                this.state,
                this.props,
                this.addToFav,
                this.toggleFavorite,
                this.setAll,
                this.setPresentation,
                this.setLightningTalk,
                this.setWorkshop,
                this.toggleTue,
                this.toggleWed,
                this.toggleNorwegian,
                this.toggleEnglish);

        saveSettings(this.state);

        return (
            <Page name='program'>
                <PageHeader subHeader="Sett av datoen">Program for Sikkerhet og Sårbarhet 2019</PageHeader>
                {content}
            </Page>
        );
    }
};

function mapStateToProps(state) {
    return {
        isFetching: state.sessions.isFetching,
        sessions: state.sessions.sessions,
        failure: state.sessions.failure,
        language: state.filters.language,
        show: state.filters.show,
        day: state.filters.day,
        filteredList: state.filters.filteredList
    };
}

export default connect(mapStateToProps, { getSessions, setLanguage, setShow, setDay, setFilteredList })(Program);
