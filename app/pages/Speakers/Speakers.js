import * as React from 'react';
import Page from '../../components/Page/Page';
import PageHeader from '../../components/PageHeader/PageHeader';
import {LeftBlock} from '../../components/Block/Block';
import {Col, Grid, Row} from 'react-flexbox-grid';
import {Section} from '../../components/Section/Section';
import speakers from '../../data/speakers';
import './Speakers.less';

function shuffle(o) {
    for (let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) ;
    return o;
}

const speakerImagesContext = require.context('../../assets/2019/speakers', false, /\.jpg$/);
const speakerImages = speakerImagesContext.keys().map(image => (
    {context: speakerImagesContext(image), filename: image}
));

function getimage(images, image) {
    return images.find(img => img.filename.indexOf(image) >= 0);
}

type SpeakerProps = {
    speakers: []
}

const Format = (props) => (
    <li className='presentation-formats__format format'>
        <span className={`format__icon ${props.icon}`}></span>
        <h3 className='format__title'>{props.title}</h3>
        <p className='format__length'>{props.length}</p>
        <p justify={"true"} className='format__description'>{props.description}</p>
    </li>
);

const presentations = {
    icon: 'icon-graduation',
    title: 'Foredrag',
    length: '30 minutter',
    description: 'Foredrag på Sikkerhet og Sårbarhet er 30 minutter.'
};

const workshops = {
    icon: 'icon-screen-desktop',
    title: 'Workshop',
    length: '2 timer, 4 timer, 8 timer',
    description: ''
};

function Speakers(props: SpeakerProps) {
    const shuffled = shuffle(speakers);
    return (

        <Page name='speakers'>

            <PageHeader subHeader="">Årets foredragsholdere</PageHeader>
            {shuffled.map((speaker) => {
                return (
                    <Section>
                        <LeftBlock header={speaker.name} image={getimage(speakerImages, speaker.image).context}>
                            <p>
                                {speaker.title}
                            </p>
                            <p>
                                {speaker.bio}
                            </p>
                        </LeftBlock>
                    </Section>
                );
            })}
        </Page>
    );

}

export default Speakers;
