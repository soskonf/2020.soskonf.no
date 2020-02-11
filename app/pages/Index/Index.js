//@flow
import * as React from 'react';
import Container from '../../components/Container/Container';
import {Section} from '../../components/Section/Section';
import Banner from '../../components/Banner/Banner';
import {LeftBlock} from '../../components/Block/Block';
import {Header} from '../../components/Header/Header';
import Page from '../../components/Page/Page.js';
import './Index.less';

function Index() {
    return (
        <Page name='index'>
            <Container fullWidth>
                <Banner />
            </Container>
            <Section alternate>
                <Header align="center">Om Sikkerhet og Sårbarhet</Header>
                <LeftBlock header="SOS 101">
                    <p>
                        En konferanse for deg som er opptatt av informasjonssikkerhet og IKT.
                    </p>

                    <p>
                        Ikke kommersiell konferanse der all fortjeneste går til next års konferanse eller andre aktiviter igjennom året.
                    </p>
                </LeftBlock>
                {/*<Section fluid>*/}
                    {/*<ImageBlock image={partners1} alt="Pirsenteret" />*/}
                {/*</Section>*/}
            </Section>
        </Page>
    );
}

export default Index;
