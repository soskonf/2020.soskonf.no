//@flow
import * as React from 'react';
import Page from '../../components/Page/Page';
import PageHeader from '../../components/PageHeader/PageHeader';
import {Section} from '../../components/Section/Section';
import {CenterBlock, ImageBlock, LeftBlock} from '../../components/Block/Block';

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
            <PageHeader subHeader="7.-8. Mai. 2019" subSubHeader="Trondheim - Norge">Velkommen til Sikkerhet og Sårbarhet 2019</PageHeader>
            <AboutSection />
            {/*<TicketSection />*/}
            <ImageBlock />
            <BetterExplorerSection />
            <ImageBlock />
            {/*<ProgramSection />*/}
            <ImageBlock />
            {/*<AweZoneSection />*/}
            <QuestionSection />
        </Page>
    );
}

export default Info;