import '../../../styles.css';
import {Helmet} from "react-helmet-async";
import FocusableHeader from "../../../components/FocusableHeader";
import ExampleBox from "../../../components/ExampleBox";
import {FaArrowRight, FaCheckCircle, FaCircle, FaToggleOff, FaToggleOn} from "react-icons/fa";
import React, {useState} from "react";
import CopyableCodeBlock from "../../../components/CopyableCodeBlock";
import {ImCheckboxChecked, ImCheckboxUnchecked} from "react-icons/im";
import {CriteriaList} from "../../../components/CriteriaList/CriteriaList";
import {LiaToggleOffSolid, LiaToggleOnSolid} from "react-icons/lia";

export default function ToggleButton() {
    const pageHeader="Valintapainike / Toggle Button"
    const criteriaArray=["1.4.1", "1.4.3", "2.1.1","2.1.2", "2.4.3", "2.4.7","4.1.2"];
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
                        <p>jeje</p>
                        <h2>WCAG 2.1 -ohjeistuksen A- ja AA-tason onnistumiskriteerit valintapainikkeen näkökulmasta</h2>
                        <div className="criteria-div">
                            <h3>1.3.1 Informaatio ja suhteet (A)</h3>
                            <p>Painikkeen kohdalla ainoastaan painalluksesta seuraava visuaalinen muutos ei riitä välittämään
                                tietoa käyttäjälle. Jos elementtiin, jonka rooli on painike (button), elementtiin voidaan lisätä aria-pressed-attribuutti, joka muuttaa painikkeen useasti painettavaksi valintapainikkeeksi.
                            </p>

                            <ExampleBox
                                title={"Valintakytkin painike / Toggle Swich"}
                                example={
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

                                            :<LiaToggleOffSolid  />
                                        }
                                    </button>
                                </div>
                                    }
                            />
                            <p>Aria-pressed on totuusarvo true tai false, joka kertoo avustavalle teknologialle, painikkeen tilasta.
                                Tässä esimerkissä painettu arvo on true ja painamattoman painikkeen arvo on false.
                                Esimerkin painike on sitä edeltävän nimilapun avulla ja siinä on käytetty aria-pressed-attribuuttia.
                                Näin ollen painiketta painettua ruudulukija kertoisi "Valinta 1 vaihtopainike painettu"
                            </p>


                            <CopyableCodeBlock aria-label="Kopoitava esimerkkikoodi"
                                               text={
                                                   `<label for="swichbutton" >Valinta 1</label> \n` +
                                                    `<button \n` +
                                                   ` id="swichbutton"\n` +
                                                   ` aria-pressed="true">\n` +
                                                   `    <FaCheckCircle />    //Valintakytkimen kuvake\n` +
                                                   `</button>`}/>

                            <p>Jos painike on suoraan yhteydessä sitä edeltävään tekstiin, tulee otsikko ja painike yhdistää toisiinsa
                                ohjelmallisesti esimerkiksi aria-labelledby-attribuutin avulla.
                            </p>

                            <CopyableCodeBlock aria-label="Kopoitava esimerkkikoodi"
                                               text={`<button aria-pressed="true">\n` +
                                                   `    <FaCheckCircle  aria-label="Merkkaus"/> \n` +
                                                   `</button> ... valintapainike otsikolla`}/>
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