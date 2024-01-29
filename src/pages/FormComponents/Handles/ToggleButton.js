import '../../../styles.css';
import {Helmet} from "react-helmet-async";
import FocusableHeader from "../../../components/FocusableHeader";
import ExampleBox from "../../../components/ExampleBox";
import {FaArrowRight, FaCheckCircle, FaCircle} from "react-icons/fa";
import {useState} from "react";
import CopyableCodeBlock from "../../../components/CopyableCodeBlock";

export default function ToggleButton() {
    const pageHeader="Valintapainike"
    const [toggleButtonActive, setToggleButtonActive] = useState(false);

    return(
        <div>
            <Helmet>
                <title>Valintapainike - Helppokäyttöinen lomakesovellus</title>
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
                                example={
                                    <button
                                        className={toggleButtonActive ? "button-example-toggle-aria-pressed active-togglebutton" : "button-example-toggle-aria-pressed"}
                                        aria-pressed={toggleButtonActive ? 'true' : 'false'}
                                        onClick={() =>
                                            setToggleButtonActive((prev) => !prev)}>

                                        {toggleButtonActive ?

                                        <FaCheckCircle  aria-label="Merkkaus"/>
                                            :<FaCircle  aria-label="Merkkaus"/>
                                        }
                                    </button> }
                            />
                            <p>Aria-pressed on totuus arvo true tai false, joka kertoo avustavalle teknologialle, painikkeen tilasta.
                                Tässä esimerkissä painettu arvo on true ja painamattoman painikkeen arvo on false.
                                Esimerkin painike on nimetty aria-labelin avulla nimellä "Merkkaus" ja siinä on käytetty aria-pressed-attribuuttia.
                                Näin ollen painiketta painettua ruudulukija kertoisi "Merkkaus grafiikka, vaihtopainike painettu"
                            </p>


                            <CopyableCodeBlock aria-label="Kopoitava esimerkkikoodi"
                                               text={`<button aria-pressed="true">\n` +
                                                   `    <FaCheckCircle  aria-label="Merkkaus"/> \n` +
                                                   `</button>`}/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}