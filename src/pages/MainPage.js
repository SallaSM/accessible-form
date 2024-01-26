import '../styles.css';
import {Helmet} from "react-helmet-async";
import {CriteriaList} from "../components/CriteriaList/CriteriaList";
import FocusableHeader from "../components/FocusableHeader";

export default function MainPage() {
const pageHeader="Etusivu";

    return(
        <>
            <Helmet>
                <title>Etusivu - Helppokäyttöinen lomakesovellus</title>
                <meta name="description" content="Helppokäyttöinen lomakesovellus-sivusto on luotu tiedottamaan saavutettavuudesta ja helppokäyttöisen lomakkeen rakentamisesta."/>
            </Helmet>


                <div className="non-scroll-page-container">
                    <FocusableHeader header={pageHeader}/>

                    <div className="col-11 col-s-11">
                        <p>Digitaalinen saavutettavuus tarkoittaa sitä, että mahdollisimman monenlaiset käyttäjät voivat käyttää verkkopalveluita mahdollisimman helposti. Se edellyttää ihmisten moninaisuuden ja erilaisuuden huomioimista verkkopalvelujen suunnittelussa ja toteutuksessa.</p>
                        <p>Tämä on saavutettava verkkosivusto, joka sisältää tietoa saavutettavan lomake-elementin osien ohjelmoinnista noudattaen WCAG 2.1 -ohjeistusta. Sivusto on suunnattu ohjelmistosuunnittelijoille, koodareille ja muille asiasta kiinnostuneille. Tämä sivusto on luotu opinnäytetyönä yhteistyössä digitaalisen saavutettavuuden asiantuntijan Selko Digitalin kanssa.</p>
                        <h2 >WCAG 2.1 -ohjeistus</h2>
                        <p>WCAG eli Web Content Accessibility Guidelines tarkoittaa suomeksi verkkosisällön saavutettavuusohjeita. WCAG on kansainvälisen World Wide Web -konsortion W3C:n laatima ohjeistus verkkosisältöjen saavutettavuudesta. Ohjeistus koostuu kriteereistä, joita on kolmessa eri tasossa eli A-, AA- ja AAA-tasossa. Tällä sivustolla käsitellään WCAG 2.1 -ohjeistusta A- ja AA-tasolla.
                            WCAG-ohjeistus on laadittu, jotta kaikki ihmiset, muun muassa myös vammoja tai toimintarajoitteita omaavat henkilöt, voivat itsenäisesti käyttää verkkopalveluja.
                        </p>

                        <h2>Digipalvelulaki</h2>
                        <p>Laki digitaalisten palvelujen tarjoamisesta tuli voimaan Suomessa 1.4.2019 ja siihen tuli muutoksia 1.2.2023. Laki velvoittaa julkista sektoria ja osaa yksityisen ja kolmannen sektorin organisaatioista täyttämään saavutettavuusvaatimukset. Lain taustalla ovat vuonna 2016 annettu Euroopan unionin saavutettavuus- ja vuonna 2019 annettu esteettömyysdirektiivi. Taustalla vaikuttaa myös YK:n yleissopimus vammaisten henkilöiden oikeuksista.
                            </p>
                        <p>
                            Digipalvelulain tekniset saavutettavuusvaatimukset on määritelty eurooppalaisessa EN301 549 standardissa, jossa viitataan WCAG-ohjeistukseen. Standardin mukaan velvoitettujen verkkosivujen tulee noudattaa WCAG 2.1-ohjeistuksen A- ja AA-tason kriteerejä. Laki ei velvoita AAA-tason kriteerien täyttämiseen. Saavutettavuusvaatimusten osalta standardi on kattavampi kuin pelkät WCAG-ohjeistukset. Standardi sisältää vaatimuksia myös muun muassa videosoittimille, kaksisuuntaiselle ääniviestinnälle, reaaliaikaiselle tekstille sekä mobiilisovelluksille.
                            </p>
                        <p>
                            Vaikka toimija ei kuuluisi lain piiriin, yhdenvertaisuuden tukemiseksi olisi hyvä tapa noudattaa saavutettavuusvaatimuksia tarjottavissa digitaalisissa palveluissa. Näin mahdollistetaan palvelun käyttö mahdollisimman laajalle käyttäjäkunnalle.
                        </p>
                        <p>Tämän sivuston linkit ohjaavat W3C:n sivuille.</p>




                        <div className="next-button-div">
                            <button className="next-page-button"> Painike</button>
                        </div>
                    </div>
            </div>
    </>
    )
}

