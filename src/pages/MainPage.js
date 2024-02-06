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
                        <p>Tämä on saavutettava verkkosivusto, joka sisältää tietoa saavutettavan lomake-elementin osien ohjelmoinnista noudattaen WCAG 2.1 -ohjeistusta.
                            Sivuston ratkaisut eivät ainoastaan täytä ohjeistuksien minimivaatimuksia, vaan niissä on noudatettu myös hyviä käytäntöjä saavutettavuuden takaamiseksi.
                            Sivusto on suunnattu ohjelmistosuunnittelijoille, koodareille ja muille asiasta kiinnostuneille. Tämä sivusto on luotu opinnäytetyönä yhteistyössä digitaalisen saavutettavuuden asiantuntijan Selko Digitalin kanssa.</p>
                        <h2 >WCAG 2.1 -ohjeistus</h2>
                        <p>WCAG eli Web Content Accessibility Guidelines tarkoittaa suomeksi verkkosisällön saavutettavuusohjeita. WCAG on kansainvälisen World Wide Web -konsortion W3C:n laatima ohjeistus verkkosisältöjen saavutettavuudesta. Ohjeistus koostuu kriteereistä, joita on kolmessa eri tasossa eli A-, AA- ja AAA-tasossa. Tällä sivustolla käsitellään WCAG 2.1 -ohjeistusta A- ja AA-tasolla.
                            WCAG-ohjeistus on laadittu, jotta kaikki ihmiset, muun muassa myös vammoja tai toimintarajoitteita omaavat henkilöt, voivat itsenäisesti käyttää verkkopalveluja.
                        </p>


                        {/*   <div className="next-button-div">
                            <button className="next-page-button"> Painike</button>
                        </div>*/}
                    </div>
            </div>
    </>
    )
}

