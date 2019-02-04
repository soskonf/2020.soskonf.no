import * as React from 'react';
import Page from '../../components/Page/Page';
import PageHeader from '../../components/PageHeader/PageHeader';
import {Section} from '../../components/Section/Section';
import {CenterBlock, ImageBlock, LeftBlock} from '../../components/Block/Block';
import {Header} from '../../components/Header/Header';
import partners from '../../data/partners';
import {Col, Grid, Row} from 'react-flexbox-grid';
import {Link} from "../../components/link";
import britannia from "../../assets/britannia-fasade2.jpg";

function shuffle(o){
    for(let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

const imagesContext = require.context('../../assets/partners-19', false, /\.svg$/);
const images = imagesContext.keys().map(image => (
    {context: imagesContext(image), filename: image}
));

function getimage(images, image) {
    return images.find(img => img.filename.indexOf(image) >= 0);
}

type PartnerListProps = {
    partners: []
}

function PartnerList(props: PartnerListProps) {
    const shuffled = shuffle(props.partners);
    return (
        <Grid fluid>
            <Row className="partners-list-container">
                {shuffled.map((partner) => {
                    return (
                        <Col key={partner.name}>
                            <Link href={partner.url} className="partners-list-item">
                                <img className="partner-logo" src={getimage(images, partner.logo).context} alt={partner.name}/>
                            </Link>
                        </Col>
                    )
                })}
            </Row>
        </Grid>
    );
}


function AboutSection() {
    return (
        <Section>
            <LeftBlock header="Hva er Sikkerhet og Sårbarhet">
                <p>
                    Sikkerhet og Sårbarhet er et møtestedet for deg som er opptatt av informasjonssikkerhet og IT. Vil
                    du lære, forstå sammenhenger, bli oppdatert og knytte kontakter – da er Sikkerhet og Sårbarhet
                    stedet for deg!
                </p>
            </LeftBlock>
        </Section>

    );
}

function TicketSection() {
    return (
        <Section>
            <LeftBlock header="Første steg: kjøp billett!">
                <p>
                    For å delta trenger du en billet. Billetten gir deg tilgang til hele konferansen. Billettene er nå lagt ut for salg. Bestiller du tidlig får du Early-Bird rabatt, bestill nå!
                </p>
            </LeftBlock>
            <CenterBlock>
                <p>
                    <br />
                    <a className='button button--transparent' href="/tickets">Kjøpt billett til Sikkerhet og Sårbarhet 2019 nå!</a>
                </p>
            </CenterBlock>
        </Section>
    );
}

function BetterExplorerSection() {
    return (
        <Section>
            <LeftBlock header="To hele dager">
                <p>
                    To hele dager med foredrag. Ikke gå glipp av alle de fantastiske <a href="/program">foredragene</a>.
                </p>
            </LeftBlock>
            <LeftBlock header="Middag og underholdning">
                <p>
                    Etter en dag med gode foredrag og mye diskusjon, så vil det smake med en god middag og litt underholdning.
                </p>
            </LeftBlock>
            <LeftBlock header="Nettverking">
                <p>
                    Vi lover at du vil møte mange interessante folk på Sikkerhet og Sårbarhet. Ta en kaffe og diskuter!
                </p>
            </LeftBlock>
        </Section>
    );
}


function ProgramSection() {
    return (
        <Section>
            <LeftBlock header="Programmet">
                <p>
                    Hele programmet er nå <a href="/program">tilgjengelig</a>.
                </p>
            </LeftBlock>
            <LeftBlock header="Presentations">
                <p>
                    Foredrag på Sikkerhet og Sårbarhet er 30 eller 45 minutter.
                </p>
            </LeftBlock>
        </Section>
    );
}

function PartnerSection() {
    return (
        <Section alternate pixel>
            <Header align='center'>Partnere</Header>
            <PartnerList partners={partners} />
        </Section>
    );
}

function LocationSection() {
    return (
        <Section alternate pixel fluid>
            <Header align='center'>Holdes på ærverdige Britannia Hotell!</Header>
            <LeftBlock>
                <Section>
                    <ImageBlock image={britannia} alt="Britannia Kongress" />
                </Section>
            </LeftBlock>
        </Section>
    );
}


function QuestionSection() {
    return (
        <Section>
            <LeftBlock header="Spørsmål?">
                <p>
                    Ta kontakt på <a href='mailto:program@soskonf.no'>program@soskonf.no</a> hvis du har noen spørsmål.
                </p>
                <p>
                    Vi håper å kunne se deg på Sikkerhet og Sårbarhet 2019!
                </p>
            </LeftBlock>
        </Section>
    );
}


function Info() {
    return (
        <Page name='info'>
            <PageHeader subHeader="7.-8. Mai" subSubHeader="Britannia Hotell, Trondheim">Sikkerhet og Sårbarhet 2019</PageHeader>
            <AboutSection />
            {/*<TicketSection />*/}
            <PartnerSection />
            {/*<ImageBlock />*/}
            <BetterExplorerSection />
            {/*<ImageBlock />*/}
            <LocationSection />
            {/*<ProgramSection />*/}
            {/*<ImageBlock />*/}
            {/*<AweZoneSection />*/}
            <QuestionSection />
        </Page>
    );
}

export default Info;
