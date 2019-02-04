//@flow
import * as React from 'react';
import Page from '../../components/Page/Page';
import PageHeader from '../../components/PageHeader/PageHeader';
import {LeftBlock} from '../../components/Block/Block';
import {Section} from '../../components/Section/Section';

function NotFound() {
    return (
        <Page name='404'>
            <PageHeader subHeader="Ukjent side...">404</PageHeader>
            <Section>
                <LeftBlock header="Feilcode 404">
                    <p>
                        Det oppstod en feil. Hvis du vet at dette burde ha fungert, ta kontakt
                        på <a href='mailto:program@soskonf.no'>program@soskonf.no</a>.
                    </p>
                </LeftBlock>
            </Section>
        </Page>
    );
}

export default NotFound;
