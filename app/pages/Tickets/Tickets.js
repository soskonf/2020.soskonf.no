//@flow
import * as React from 'react';
import {P} from '../../components/block';
import {Section} from '../../components/Section/Section';
import {CenterBlock} from '../../components/Block/Block';
import {Col, Grid, Row} from 'react-flexbox-grid';
import Page from '../../components/Page/Page';
import PageHeader from '../../components/PageHeader/PageHeader';
import './Tickets.less';

type TicketsProps = {
}

function Tickets(props: TicketsProps) {
    return (
        <Page name='tickets'>
	        <PageHeader subHeader="til Sikkerhet og Sårbarhet 2019">Kjøp billetter</PageHeader>
	        <Section>
                <CenterBlock header="">
	                    <div className="partner-prices-main"></div>
{/*
	                    <P>
	                        Billetten gir full tilgang til konferansen <br />
	                        <span className="partners__vat">priser er u/mva</span>
	                    </P>
*/}
	                    <P>
                            <a className='button button--transparent' href="https://embedded-trd.hoopla.no/sales/3657439979">Kjøp billett via Hoopla</a>
	                    </P>
	            </CenterBlock>
	        </Section>

{/*
 			<Section>
	            <CenterBlock header="Need more info about Trondheim Developer Conference?">
                    <P>
                        <br />
                        We'll release more information about the conference before the summer,
                        and the detailed program with information about all the talks will be ready in September.
                    </P>
                    <P>
                        Don't wait too long buying your ticket though – last year all of the tickets were sold,
                        and we had waiting lists. We expect a decent amout of interest this year as well.
                    </P>
	            </CenterBlock>
	        </Section>
*/}
	    </Page>
    )
}

export default Tickets;
