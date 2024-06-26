import '../../../styles.css';
import {Helmet} from "react-helmet-async";
import FocusableHeader from "../../../components/FocusableHeader";
import ExampleBox from "../../../components/ExampleBox";
import {FaArrowRight, FaCheckCircle, FaCircle, FaToggleOff, FaToggleOn} from "react-icons/fa";
import React, {useState} from "react";
import CopyableCodeBlock from "../../../components/CodeBlock/CopyableCodeBlock";
import {ImCheckboxChecked, ImCheckboxUnchecked} from "react-icons/im";
import {CriteriaList} from "../../../components/CriteriaList/CriteriaList";
import {LiaToggleOffSolid, LiaToggleOnSolid} from "react-icons/lia";

/**
 * ToggleButton is a component page in the website. It holds information about accessible toggle button.
 * The page consists of accessible header <FocusableHeader>, text snippets <p>, component examples <ExampleBox>,
   code examples <CopyableCodeBlock> and a list of criteria <CriteriaList>.
 *
 * Helmet-component: is used to manipulate the title of the website in single page application.
   To change the title of the website when navigating to new page is required for accessibility.
 * CriteriaList-component: needs criteriaArray as prop, so it can filter the correct criteria to each page.
 *
 * TODO:
    - Name pages as ...Page for clarity.
    - ASIDE-element doesn't stand right in DOM. Should be outside the main div. Accessibility issue.
    - Fix text to be fetched from file or database, not hard coded.
    - Add text editor and user role to write content.
 */

export default function ToggleButton() {
    const pageHeader="Valintapainike / Toggle Button"
    const criteriaArray=["1.3.1","1.3.3","1.4.1","1.4.3","1.4.11","2.1.1","2.1.2","2.4.3","2.4.6","2.4.7","2.5.3","3.2.1","3.2.4","4.1.1","4.1.2"];
    const [toggleButtonActive, setToggleButtonActive] = useState(false);
    {/*className={toggleButtonActive ? "button-example-toggle-aria-pressed active-togglebutton" : "button-example-toggle-aria-pressed"}*/}
    return(
        <div>
            <Helmet>
                <title>Valintapainike / Toggle Button- Helppokäyttöinen lomakesovellus</title>
            </Helmet>
            <div>
                <div className="non-scroll-page-container">
                    <div id="content" className="page-container col-8 col-s-12">
                        <FocusableHeader header={pageHeader}/>
                        <p>Valintapainike eli Toggle Button on useasti painettava painike, joka mahdollistaa tilan vaihtamisen päälle tai pois päältä.
                            Valintapainikkeen avulla voi ohjata erilaisia toiminnallisuuksia tai tiloja yhdellä napsautuksella.
                            Lomakkeessa valintapainikkeen käyttötarkoitus on yleensä valintojen merkkaus [valittu / ei valittu].
                        </p>
                        <p>Kun painikeelle eli &lt;button&gt;-elementille asetetaan aria-atribuutti aria-pressed, painikkeesta tulee valintapainike eli toggle button.
                        Toggle button voi sisältää näkyvää tekstiä, mutta teksti ei saa muutua aktivoinnin yhteydessä.</p>

                        <p>Seuraavaksi WCAG-kriteerien läpikäyntiä, joihin tulisi kiinnittää huomiota lomakkeen valintapainikkeita ohjelmoidessa.
                            Käydään läpi ainoastaan kriteerit, joiden kohdalla on erityistä huomioitavaa valintapainikekomponentin näkökulmasta.
                            Jos kriteeriä ei ole käyty läpi tällä sivulla, sitä on selitetty ylemmillä Lomake-elementti- ja Painikkeet-sivuilla.
                        </p>

                        <h2>WCAG 2.1 -ohjeistuksen A- ja AA-tason onnistumiskriteerit valintapainikkeen näkökulmasta</h2>
                        <div className="criteria-div">
                            <h3>1.3.1 Informaatio ja suhteet (A)</h3>
                            <p>Painikkeen kohdalla ainoastaan painalluksesta seuraava visuaalinen muutos ei riitä välittämään
                                tietoa käyttäjälle. Jos elementtiin, jonka rooli on painike (button), elementtiin voidaan lisätä aria-pressed-attribuutti, joka muuttaa painikkeen useasti painettavaksi valintapainikkeeksi.
                            </p>

                            <ExampleBox
                                title={"Valintakytkin painike / Toggle Swich"}
                                example={
                                <div className="flex-box">
                                    <div className="example-label-btn-box" >
                                        <label for="swichbtn" className="example-btn-label">Valinta 1</label>
                                        <button
                                            id="swichbtn"
                                            className={toggleButtonActive ? "button-example-toggle-aria-pressed active-togglebutton" : "button-example-toggle-aria-pressed"}
                                            aria-pressed={toggleButtonActive ? 'true' : 'false'}
                                            onClick={() =>
                                                setToggleButtonActive((prev) => !prev)}>

                                            {toggleButtonActive ?
                                                    <LiaToggleOnSolid />
                                                :
                                                    <LiaToggleOffSolid  />
                                            }
                                        </button>
                                    </div>
                                    <p  className={toggleButtonActive ? "toggle-p-checked" : "hidden"}
                                    aria-hidden="true">Valittu</p>

                                </div>
                                    }
                            />
                            <p>Aria-pressed on totuusarvo true tai false, joka kertoo avustavalle teknologialle, painikkeen tilasta.
                                Tässä esimerkissä painettu arvo on true ja painamattoman painikkeen arvo on false.
                                Esimerkin painike on sitä edeltävän nimilapun avulla ja siinä on käytetty aria-pressed-attribuuttia.
                                Näin ollen painiketta painettua ruudulukija kertoisi "Valinta 1 vaihtopainike painettu".
                            </p>


                            <CopyableCodeBlock aria-label="Kopoitava esimerkkikoodi"
                                               text={
                                                   `<label for="swichbutton" >Valinta 1</label> \n` +
                                                    `<button \n` +
                                                   ` id="swichbutton"\n` +
                                                   ` aria-pressed="true">\n` +
                                                   `    <LiaToggleOnSolid />    //Valintakytkimen ikoni\n` +
                                                   `</button>`}/>

                            <p>Painikkeella, jolla ei ole teksitä, tulee olla kuvaava nimi, joka kertoo käyttötarkoituksen.
                                Esimerkin tapauksessa ei kannata lähteä nimeämään painiketta erikseen esimerkiksi aria-label-attribuutin avulla,
                                vaan yhdistäminen edeltävään nimilappuun on parempi ratkaisu, koska painikkeen nimi on edeltävä nimilappu.
                                Jos painike on suoraan yhteydessä sitä edeltävään tekstiin, tulee otsikko ja painike yhdistää toisiinsa
                                ohjelmallisesti.
                                </p>
                            <p>
                                Edeltävässä esimerkissä on käytetty id ja for attribuutteja otsikon ja painikkeen yhdistämiseen.
                                Yhdistettävän elementin id-attribuutin tulee olla sama kuin otsikon for-attribuutin sisällön.
                                Näin ollen ruudunlukija osaa yhdistää elementit toisiinsa ja lukisi esimerkin tilanteessa seuraavan kaltaista: "Vaihtopainike, ei painettu, Valinta 1".
                            </p>

                            <h3>1.4.1 Värien käyttö (A)</h3>
                            <p>
                                Jos valintapainike on lomakkeessa ilmaisemassa valintaa, valittu/ei valittu tila tulee näkyä selkeästi.
                                Ainoastaan värin vaihto ei riitä ilmaisemaan painikkeen valittua tilaa...
                            </p>
                            <b>.. Lisää sisältöä tulossa...</b>
                            {/*

                            <CopyableCodeBlock aria-label="Kopoitava esimerkkikoodi"
                                               text={
                                `<label for="swichbutton" >Valinta 1</label> \n` +
                                                   `<button \n` +
                                                   ` id="swichbutton"\n` +
                                                   ` aria-pressed="true">\n` +
                                                   `    <LiaToggleOnSolid />    //Valintakytkimen ikoni\n` +
                                                   `</button> \n` +
                                                   `<p className={toggleButtonActive ? "not-hidden" : "hidden"}>Valittu</p>` }/>
                            */} </div>
                    </div>
                    <aside aria-label="Kriteerilista" >
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