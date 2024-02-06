import '../../../styles.css';
import {Helmet} from "react-helmet-async";
import {CriteriaList} from "../../../components/CriteriaList/CriteriaList";
import FocusableHeader from "../../../components/FocusableHeader";
import CopyableCodeBlock from "../../../components/CopyableCodeBlock";
import {Link} from "react-router-dom";
import {useState} from "react";
import {FaArrowRight} from "react-icons/fa";
import ExampleBox from "../../../components/ExampleBox";

export default function Handles() {
    const criteriaArray=["1.3.1","1.3.3","1.4.3","1.4.4","2.1.1","2.1.2","2.4.3","2.4.7","2.5.2","2.5.3","3.2.1","3.2.4","4.1.1","4.1.2"];
    const pageHeader="Painikkeet";
    const [basicButtonActive, setBasicButtonActive] = useState(false);
    {/* koistettu esimerkki kriteereistä
    -jos ongelmia koodiblokin kanssa, kokeile vasihtaa taxt attribuutin nimeä
     <div className="criteria-div">
                        <h3>1.4.3 Kontrasti (minimi)</h3>
                        <p>Tekstin ja taustan välinen kontrastiero tulee täyttyä. Kontrasin tarkastluun on tarjolla monia työkaluja.
                        Kontrastin vois laskea esimekriksi <Link to="https://webaim.org/resources/contrastchecker/">WebAIM.org-sivuston Contrast Checker</Link> avulla....</p>
                    </div>

                    <div className="criteria-div">
                        <h3>2.1.1 Näppäimistö</h3>
                        <p> Painiketta tulee pystyä käyttämään näppäimistöllä.
                            HTML-elementtejen oikeanlainen käyttö...
                            Näppäimistövaatimukset löytyvät Yleistä tietoa lomakkeesta -sivulta...
                        </p>
                    </div>

                             <CopyableCodeBlock aria-label="Kopoitava esimerkkikoodi"
    text={`<button>
    <FaArrowRight aria-label="Seuraava sivu painike"/>
</button>`}/>
                    */}

    return(
        <div>
            <Helmet>
                <title>Painikkeet - Helppokäyttöinen lomakesovellus</title>
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

                            </button> }
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


                <aside >
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