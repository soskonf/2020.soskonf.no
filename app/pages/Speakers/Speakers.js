//@flow
import * as React from 'react';
import Page from '../../components/Page/Page';
import PageHeader from '../../components/PageHeader/PageHeader';
import {CenterBlock} from '../../components/Block/Block';
import {Col, Grid, Row} from 'react-flexbox-grid';
import {Section} from '../../components/Section/Section';
import './Speakers.less';

type SpeakerProps = {
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
    return (
        <Page name='speakers'>
            <PageHeader subHeader="Hold et foredrag på Sikkerhet og Sårbarhet">Call for Presentations</PageHeader>
            <Section>
	            <CenterBlock header="Om Sikkerhet og Sårbarhet">
                    <p>
                        Kompleksitet er den største sårbarheten i det norske digitale samfunnet i dag ifølge NSM. Er det mulig å redusere risikoen uten å redusere kompleksiteten? Hva kan vi gjøre for å sikre leverandørkjedene?
                    </p>
					<p>
                        Økt takt og fokus på digitalisering kan gi god samfunnsøkonomisk effekt, men trusselbildet endrer seg når den digital kompleksiteten øker. Hvordan ivaretar man tilgjengeligheten, som f.eks. for de svakeste som en del av digitalisering?
                    </p>
                    <p>
                        Snart 1 år med GDPR, hvilken gode og dårlige erfaringer har man gjort seg i dette arbeid og hva er effekten av innføringen? Hvordan kan kunstig intelligens benyttes i tråd med GDPR?
                    </p>
                    <p>
                        Vi ønsker innspill til gode og dårlig erfaringer med personvernforordningen, digital kompleksitet, sikker bruk av kunstig intelligens, sikring av leverandørkjeder og infrastruktur. Tar du utfordringen?
                    </p>
                    <p>
                    	<br />
	                    <a className='button button--transparent' href="https://docs.google.com/forms/d/e/1FAIpQLSenzW5G63mrjhs83EsyqQUHqEyJugiHQgxqk6ABS43swhKE9g/viewform">Call for Presentations er åpen frem til 1. februar 2019</a>
	                </p>
	            </CenterBlock>
	        </Section>


        </Page>
    )
}

export default Speakers;