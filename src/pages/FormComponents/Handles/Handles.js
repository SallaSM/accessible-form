import '../../../styles.css';
import {Helmet} from "react-helmet-async";
import {CriteriaList} from "../../../components/CriteriaList/CriteriaList";
import FocusableHeader from "../../../components/FocusableHeader";
import CopyableCodeBlock from "../../../components/CodeBlock/CopyableCodeBlock";
import {Link} from "react-router-dom";
import {useState} from "react";
import {FaArrowRight} from "react-icons/fa";
import ExampleBox from "../../../components/ExampleBox";

/**
 * Handles is a top level component page in the website. It holds information overall about form handles.
 * The page consists of accessible header <FocusableHeader>, text snippets <p>, component examples <ExampleBox>,
   code examples <CopyableCodeBlock> and a list of criteria <CriteriaList>.
 *
 * Helmet-component: is used to manipulate the title of the website in single page application.
 To change the title of the website when navigating to new page is required for accessibility.
 * CriteriaList-component: needs criteriaArray as prop, so it can filter the correct criteria to each page.
 *
 TODO:
  - Name pages as ...Page for clarity.
  - ASIDE-element doesn't stand right in DOM. Should be outside the main div. Accessibility issue.
  - Fix text to be fetched from file or database, not hard coded.
  - Add text editor and user role to write content.
 */


export default function Handles() {
    const criteriaArray=["1.3.1","1.3.3","1.4.3","1.4.4","2.1.1","2.1.2","2.4.3","2.4.7","2.5.2","2.5.3","3.2.1","3.2.4","4.1.1","4.1.2"];
    const pageHeader="Painikkeet / Buttons";
    const [basicButtonActive, setBasicButtonActive] = useState(false);

    return(
        <div>
            <Helmet>
                <title>Painikkeet / Buttons - Helppokäyttöinen lomakesovellus</title>
            </Helmet>
            <div>

                <div className="non-scroll-page-container">
                    <div  id="pagecontent" className="page-container col-8 col-s-12">
                      <FocusableHeader header={pageHeader}/>
                        <p>Painike-elementtien avulla käyttäjät voivat käynnistää toiminnon tai tapahtuman, kuten lähettää lomake, tehdä lomakkeessa valintoja, tyhjentää lomake taikka peruuttaa toiminto kokonaan. Painikkeita on erilaisiin käyttötarkoituksiin tarjolla.
                        </p>
                        <p>Seuraavaksi WCAG-kriteerien läpikäyntiä, joihin tulisi kiinnittää huomiota lomakkeen painikkeita ohjelmoidessa. Käydään läpi ainoastaan kriteerit, joiden kohdalla on erityistä huomioitavaa painikekomponentin näkökulmasta. Jos kriteeriä ei ole käyty läpi tällä sivulla, se on selitetty ylemmällä joko Lomake-elementti-sivulla tai alemmilla painiketyyppi-sivuilla. Kriteereistä myös enemmän tietoa Lomake-elementti sivulla.
                        </p>
                        <h2>Lomakepainikkeisiin yleisesti vaikuttavat WCAG 2.1 -ohjeistuksen A- ja AA-tason onnistumiskriteerit</h2>
                        <div className="criteria-div">
                            <h3>1.3.1 Informaatio ja suhteet (A)</h3>
                            <p>Painikkeen kohdalla ainoastaan painalluksesta seuraava visuaalinen muutos ei riitä välittämään
                                tietoa aktivoinnista käyttäjälle. Yleensä painikkeen painalluksesta seuraa tapahtuma, mutta jos
                                kyseessä on esimerkiksi useasti painettava valintapainike, tulee aktivoinnin tiedottamiseen kiinnittää
                                huomiota. </p>
                            <p>
                                Elementtien väliset suhteet tulee pystyä myös selvittämään ohjelmallisesti. Jos painikkeessa ei
                                itsessään ole nimeä vaan nimilappu on esimerkiksi painikkeen lähettyvillä, tulee yhteys olla myös
                                ohjelmallisesti selvitettävissä. Näistä esimerkkejä <a href="/lomake-elementti/painikkeet/valintapainike">Valintapainike-sivulla</a>.
                            </p>

                            <h3>1.3.3 Aistinvaraiset ominaispiirteet (A)</h3>
                            <p>Yksikään painike ei pitäisi olla tulkittavissa ainoastaan yhdellä aistilla. Esimerkiksi ainoastaan
                                visuaalisuus eli esimerkiksi muoto ei riitä ainoaksi tavaksi viesti käyttäjälle, mikä painikkeen tarkoitus on. Esimerkiksi
                                kuvakepainikkeella täytyy olla toimintaa kuvaava nimi, jonka voi lisätä esimerkiksi käyttäen aria-label-attribuuttia. </p>

                             <ExampleBox
                                 title={"Nuolipainike"}
                                 example={
                                <button
                                    className={basicButtonActive ? "button-example1 active-basicbutton" : "button-example1"}
                                    onClick={() =>
                                        setBasicButtonActive(true)}>
                                        <FaArrowRight aria-label="Seuraava sivu painike"/>
                                </button>
                                }
                             />
                            <p>Esimerkin painikkeessa käytetään nuoli-ikonia viestittämään pelkästään visuaalisesti aktivoimisesta seuraavaa etenemistä sivustolla.
                                Lähdekoodissa viestittämisen ruudunlukijalle voidaan toteuttaa aria-label-attribuuttia käyttäen.
                                Esimerkissä attribuutiksi on annettu "Seuraava sivu".
                            </p>

                            <CopyableCodeBlock aria-label="Kopoitava esimerkkikoodi"
                                               text={`<button>\n` +
                                                  `    <FaArrowRight aria-label="Seuraava sivu"/> \n` +
                                                   `</button>`}/>
                            <h3> 1.4.3 Kontrasti (minimi) (AA)</h3>
                            <p>...</p>
                        </div>
                    </div>

                    <aside>
                        <CriteriaList
                            searchTerm={criteriaArray}
                            pageHeader={pageHeader}
                        />
                    </aside>
                </div>
            </div>
        </div>
    )
}