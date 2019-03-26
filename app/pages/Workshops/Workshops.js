//@flow
import {connect} from 'react-redux';
import {Link} from '../../components/link';
import {getWorkshops} from '../../actions/workshops';
import {getSessions} from '../../actions/sessions';
import * as React from 'react';
import Loader from '../../components/Loader/Loader.js';
import Page from '../../components/Page/Page.js';
import PageHeader from '../../components/PageHeader/PageHeader.js';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Section} from '../../components/Section/Section.js';
import Button from '../../components/Button/Button.js';
import {RightBlock} from '../../components/Block/Block.js';
import './Workshops.less';
import {P} from "../../components/block";
import {CenterBlock} from "../../components/Block/Block";

function workshopClass(workshop) {
    if (!workshop) {
        return 'button--disabled';
    }

    switch (workshop.status) {
        case 'FREE_SPOTS':
            return 'button--green';
        case 'FEW_SPOTS':
            return 'button--yellow';
        case 'FULL':
            return 'button--red';
        case 'VERY_FULL':
            return 'button--red';
        case 'CLOSED':
            return 'button--disabled';
        default:
            return 'button--disabled';
    }
}

function workshopStatus(workshop) {
    if (!workshop) {
        return '';
    }

    switch (workshop.status) {
        case 'FREE_SPOTS':
            return 'Registration open';
        case 'FEW_SPOTS':
            return 'Few spots left';
        case 'FULL':
            return 'Waiting list';
        case 'VERY_FULL':
            return 'No more spots';
        case 'CLOSED':
            return 'Registration closed';
        default:
            return 'Opens at August 6th, 13:00';
    }
}


function generateSpeakersString(speakers: []): string {
    let speakersCombined = '';
    speakers.forEach((speaker, idx) => (idx < speakers.length - 1) ? speakersCombined += `${speaker.name}, ` : speakersCombined += speaker.name);
    return speakersCombined;
}

type SimpleSessionListProps = {
    workshops: Array<Object>;
}

function SimpleSessionList(props: SimpleSessionListProps) {
    return (
        props.workshops.map(workshop => {
            return <div key={workshop.sessionId} className="program-simple-session-item">
                <Row>
                    <Col xs={12} sm={10} md={11} lg={11}>
                        <Row className="program-simple-session-title">
                            <Link href={`/program/${workshop.sessionId}`}>{workshop.title}</Link>
                        </Row>
                        <Row>
                            <Col className="program-margin-right">
                                {workshop.language === 'en' ? 'English' : 'Norwegian'}
                            </Col>
                            <Col className="program-margin-right">
                                {`${workshop.length} Minutes`}
                            </Col>
                            <Col>
                                {workshop.speakers.length > 1 ? generateSpeakersString(workshop.speakers) : workshop.speakers[0].name}
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={2} md={1} lg={1}>
                        {workshop.status === 'CLOSED'
                            ? null
                            :
                            <Row className="workshop-register-button" center="xs" middle="xs">
                                <Col>
                                    <Button alternate link={workshop.registerLoc}>Register</Button>
                                </Col>
                            </Row>}
                    </Col>
                </Row>
            </div>;
        })
    );
};

type WorkshopsProps = {
    getWorkshops: Function;
    getSessions: Function;
    workshops: Array<Object>;
    sessions: Array<Object>;
    isFetching: boolean;
    failure: boolean;
}

type WorkshopsState = {}

class Workshops extends React.Component<WorkshopsProps, WorkshopsState> {

    constructor(props: WorkshopsProps) {
        super(props);
    }

    componentWillMount() {
        this.props.getWorkshops();
        this.props.getSessions();
    }

    render() {
        const filteredWorkshops = this.props.sessions.filter(session => session.format === 'workshop');
        const content = this.props.failure
            ? <Section class="program-loader" dark><Loader/></Section>
            : <SimpleSessionList workshops={filteredWorkshops}/>;
        console.log('workshops', filteredWorkshops);
        return (
            <Page name='workshops'>
                <PageHeader
                    subHeader="Lær hvordan du utvikler et helhetlig sikkerhetsprogram for å ta i bruk skytjenester">Certificate
                    of Cloud Security Knowledge (CCSK) versjon 4 </PageHeader>
                <Section>
                    <RightBlock>
                        <p>Kurset består av både en omfattende eLærings-del man får tilgang til etter påmelding, samt
                            innlogging til diskusjonsfora og studiegrupper i etterkant for å sikre sertifiseringen.</p>
                        <ul>
                            <li>Bygg opp din kompetanse for å bidra i bedriftens strategiske bruk av skytjenester</li>
                            <li>Har du kompetansen fra praktisk erfaring; bekreft din kompetanse oppnådd gjennom
                                erfaring i skyssikkerhet!
                            </li>
                            <li>Dokumentèr dine tekniske kunnskaper, ferdigheter og evne til å effektivt utvikle et
                                helhetlig sikkerhetsprogram for skytjenester i forhold til globalt aksepterte standarder
                            </li>
                            <li>Skill deg fra andre kandidater for ansettelse i det raskt voksende
                                sky-sikkerhetsmarkedet
                            </li>
                            <li>Få tilgang til verdifulle karriere-ressurser, inkludert verktøy, nettverk og
                                idèutveksling med kolleger
                            </li>
                        </ul>
                    </RightBlock>
                </Section>
                <Section dark>
                    <p>
                    Cloud Security Alliance innehar den opprinnelige, leverandøruavhengige kunnskapsbasen innen skyssikkerhet utviklet av bransjen selv koordinert av Cloud Security Alliance. Sertifikatet for Cloud Security Knowledge (CCSK) er en individuell sertifisering.
                    </p>
                    <p>
                        <q>The mother of all cloud computing security certifications</q> i følge CIO Magazine.
                    </p>

                    <p>
                    Sertifiseringen dokumenterer at du har ferdigheter og kunnskaper for å sikre at skyttjenester implementeres og benyttes i organisasjonen din med nødvendige sikkerhetskontroller på plass. Dette inkluderer teknisk rammeverk såvel som rammeverk for ledelse og overordnet styring (governance).
                    </p>

                    <p>
                    Innholdet i  CCSK ble nylig oppdatert til versjon 4, og inneholder nå de nyeste og mest relevante fagområdene, inkludert DevOps, big data og IoT.
                    </p>

                    <p>
                    Denne endags workshopen vil forberede deg til CCSK eksamen. For å sikre maksimalt utbytte av opplæringen anbefaler vi at du registrerer deg tidlig og begynner å forberede på forhånd med det elektroniske opplæringsmateriellet du vil få tilgang til.
                    </p>

                    <p>
                    Eksamen er online og kan når det passer etter kursets gjennomføring (eksamenstoken verdt 2400 kroner er inkludert i kursavgiften og gir rett til to forsøk på å ta sertifiseringen).
                    </p>

                    <h3>Hvem er målgruppen?</h3>

                    <p>
                        Dette Cloud Security-kurset er rettet mot sikkerhetsfagfolk, IT-arkitekter, IT-ledere, de som er
                        ansvarlige for teknisk risiko, styring og sikring, de som leverer skyløsninger og de som ønsker
                        å øke sin kunnskap om sikkerhet tilknyttet skytjenester.
                    </p>
                    <p>
                        Det forventes at deltakerne har grunnleggende kunnskaper om sikkerhetsmekanismer som brannmurer,
                        kryptering, sikker utvikling og identitetsadministrasjon.
                    </p>


                    <h3>Hva inngår i kursavgiften?</h3>

                    <div>
                        <p>
                            Kursavgiften inkluderer tre komponenter:
                        </p>

                        <ul>
                            <li>
                                Èn full dag med interaktiv opplæring av CCSK versjon 4 kunnskapsdatabasen. Lunsj og
                                forfriskninger inkludert.
                            </li>
                            <li>
                                E-læringsmiljø med sertifiseringens materiale; du vil få tilgang til dette i forkant av
                                kurset og det anbefales at man å begynne å forberede seg FØR selve kurset. Du vil ha
                                tilgang til materiellet i ytterligere tre måneder etter kurset.
                            </li>
                            <li>
                                Eksamenstoken som gir deg rett til to forsøk på CCSK online eksamen
                            </li>
                        </ul>
                    </div>
                    <CenterBlock>
                        <P>
                            <a className='button button--transparent'
                               href="https://www.cloudsecurityalliance.no/ccskv4-mer-informasjon">Finn ut mer om kurset</a>
                        </P>
                    </CenterBlock>
                </Section>

            </Page>
        );
    }
};

function mapStateToProps(state) {
    return {
        isFetching: state.sessions.isFetching,
        workshops: state.workshops.workshops,
        sessions: state.sessions.sessions,
        failure: state.workshops.failure
    };
}

export default connect(mapStateToProps, {getWorkshops, getSessions})(Workshops);
