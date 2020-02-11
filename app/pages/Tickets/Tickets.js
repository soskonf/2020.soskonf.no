//@flow
import * as React from 'react';
import {P} from '../../components/block';
import {Section} from '../../components/Section/Section';
import {CenterBlock} from '../../components/Block/Block';
import Page from '../../components/Page/Page';
import PageHeader from '../../components/PageHeader/PageHeader';
import './Tickets.less';

type TicketsProps = {}

function Tickets(props: TicketsProps) {
    return (
        <Page name='tickets'>
            <PageHeader subHeader="til Sikkerhet og Sårbarhet 2020">Kjøp billetter</PageHeader>
            <Section>
                <CenterBlock header="Ordinær">
                    <div className="partner-prices-main"></div>
                    <P>
                        Kommer
                        {/*<a className='button button--transparent'*/}
                        {/*   href="https://embedded-trd.hoopla.no/sales/3657439979">Kjøp billett via Hoopla</a>*/}
                    </P>

                </CenterBlock>
            </Section>

 			<Section>
	            <CenterBlock header="Student">
                    <p>
                        Studenter kan delta til medlemspris hvis man er medlem i <a href="https://www.dataforeningen.no">Den Norske Dataforening</a>, det er gratis å <a href="https://www.dataforeningen.no/bli-medlem/">Bli Medlem</a>.
                    </p>
	            </CenterBlock>
	        </Section>
        </Page>
    );
}

export default Tickets;
