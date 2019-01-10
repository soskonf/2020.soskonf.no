//@flow
import * as React from 'react';
import { Heading, LargeHeading, SmallHeading, Container, Pitch } from '../../components/page';
import { Block, Content, SubHeader, P} from '../../components/block';
import { CBlock, CHeader, CContent } from '../../components/centeredblock';
import { Link } from '../../components/link';
import { Section } from '../../components/Section/Section';
import { CenterBlock, LeftBlock, ImageBlock } from '../../components/Block/Block';
import { Header } from '../../components/Header/Header';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '../../components/Button/Button';
import Page from '../../components/Page/Page';
import PageHeader from '../../components/PageHeader/PageHeader';
import Timeline from '../../components/timeline';
import Youtube from '../../components/youtube';
import tickets1 from '../../assets/tickets_1.jpg';
import tickets2 from '../../assets/tickets_2.jpg';
import tickets3 from '../../assets/partners_1.jpg';
import './Tickets.less';

type TicketsProps = {
}

function Tickets(props: TicketsProps) {
    return (
        <Page name='tickets'>
	        <PageHeader subHeader="Britannia Hotell, 7.-8. Mai">Billetter til Sikkerhet og Sårbarhet 2019</PageHeader>
	        <Section>
                <CenterBlock header="Kjøp billetter">
	                    <div className="partner-prices-main">NOK 3.500,-</div>
	                    <P>
	                        Billetten gir full tilgang til konferansen <br />
	                        <span className="partners__vat">priser er u/mva</span>
	                    </P>{/*
	                    <P>
                            <a className='button button--transparent' href="https://goo.gl/forms/Eb2aOAjeT3v72iNa2">Add your name to the waiting list</a>
	                    </P>*/}
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
