import * as React from 'react';
import {Col, Grid, Row} from 'react-flexbox-grid';
import partners1 from '../../assets/britannia-fasade1.jpg';
import {CenterBlock, ImageBlock, LeftBlock} from '../../components/Block/Block';
import {Header, SubHeader} from '../../components/Header/Header';
import Page from '../../components/Page/Page';
import PageHeader from '../../components/PageHeader/PageHeader';
import {Section} from '../../components/Section/Section';
import {Link} from '../../components/link';
import partners from '../../data/partners';
import './Partners.less';

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

function Partners() {
    return (
        <Page name='partners'>
            <PageHeader subHeader="Bli partner i 2019">Kjære partnere</PageHeader>

            <Section>
                <LeftBlock header="Vi ønsker partnere, ikke sponsorer">
                    <p>
                        Vi ønsker at utstillerområdet skal være spennende for deltakerne under konferansen. For å få til
                        dette ønsker vi å jobbe sammen med partnerne for å få til et velykket utstillerområde.
                        Som partner bidrar det ikke bare økonomisk, men for å skape en god atmosfære og opplevelse.
                    </p>
                </LeftBlock>
            </Section>
            <Section alternate pixel>
                <Header align='center'>Partnere</Header>
                <PartnerList partners={partners} />
            </Section>
            <Section fluid>
                <ImageBlock image={partners1} alt="Britannia Kongress" />
            </Section>
            <Section>
                <CenterBlock header="Utstillerområdet">
                    <p>
                        Alle partnere har stands på messeområdet, som er plassert rett utenfor kongresshallen.
                        I pausene fylles utstillerområde med de fleste deltakerne.
                    </p>
                </CenterBlock>
            </Section>

            <Section dark>
                <LeftBlock header="Partner alterntiver">
                    <p>
                        Utstillerområde på Britannia Hotell går oss god plass og en unik opplevelse.
                    </p>
                    <SubHeader>Inkludert i partneravtalen</SubHeader>
                    <ul className='list'>
                        <li className='list__item'>
                            Stand (9 kvadrat, 3m x 3m).
                        </li>
                        <li className='list__item'>
                            En konferansebillett som gir tilgang til hele konferansen og middagen.
                        </li>
                        <li className='list__item'>
                            Ytterligere billetter til redusert partner pris.
                        </li>
                        <li className='list__item'>
                            Logoen på <a href='https://2019.soskonf.no'>nettsidene</a>,
                            konferanseområdet, i programmet og alt reklamemateriell.
                        </li>
                    </ul>
                </LeftBlock>
            </Section>
{/*
            <Section fluid>
                <ImageBlock image={partners2} alt="Britannia Kongress" />
            </Section>
*/}
            <Section>
                <CenterBlock header="Ta kontakt">
                    <p>
                        Kontakt oss for å bli partner på <a href='mailto:laila.katnosa@dataforeningen.no'>laila.katnosa@dataforeningen.no</a>.
                    </p>
                </CenterBlock>
            </Section>
        </Page>
    )
}

export default Partners;
