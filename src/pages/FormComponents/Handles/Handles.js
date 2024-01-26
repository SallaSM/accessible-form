import '../../../styles.css';
import {Helmet} from "react-helmet-async";
import {CriteriaList} from "../../../components/CriteriaList/CriteriaList";
import FocusableHeader from "../../../components/FocusableHeader";
import CopyableCodeBlock from "../../../components/CopyableCodeBlock";
import {Link} from "react-router-dom";
import {useState} from "react";

export default function Handles() {
    const criteriaArray=["1.4.1", "1.4.3", "2.1.1","2.1.2", "2.4.3", "2.4.7","4.1.2"];
    const pageHeader="Painikkeet";
    const [toggleButtonActive, setToggleButtonActive] = useState(false);

    return(
        <div>
            <Helmet>
                <title>Painikkeet - Helppokäyttöinen lomakesovellus</title>
            </Helmet>
            <div className="non-scroll-page-container">
                <div  id="content" className="page-container col-8 col-s-12">
                  <FocusableHeader header={pageHeader}/>

                    <p>Painike-elementtien avulla käyttäjät voivat käynnistää toiminnon tai tapahtuman, kuten lähettää lomake, tehdä lomakkeessa valintoja, tyhjentää lomake taikka peruuttaa toiminto kokonaan. Painikkeita on erilaisiin käyttötarkoituksiin tarjolla.
                        <br/>
                        <br/>
                        Seuraavaksi WCAG-kriteerien läpikäyntiä, joihin tulisi kiinnittää huomiota lomakkeen painikkeita ohjelmoidessa. Käydään läpi ainoastaan kriteerit, joiden kohdalla on erityistä huomioitavaa painikekomponentin näkökulmasta. Jos kriteeriä ei ole käyty läpi tällä sivulla, se on selitetty ylemmällä joko Lomake-elementti-sivulla tai alemmilla painiketyyppi-sivuilla. Kriteereistä myös enemmän tietoa Lomake-elementti sivulla.
                    </p>

                    <div className="criteria-div">
                        <h2>1.1.1	Ei-tekstuaalinen sisältö (A)</h2>
                        <p>Ainoastaan ikonin sisältävissä painikkeissa ikonin on koristeellinen eikä välitä informaatiota käyttötarkoituksestaan ruudunlikan käyttäjälle.  Näin ollen se on hämmentävä elementti. Ikoni on parempi piilottaa ruudunlukijalta aria-hidden-attribuutin avulla. Napilla tulee olla kuitenkin annettu kuvaava nimi avustavaa teknologiaa varten.
                        JATKA TÄSTÄ</p>

                        <div className="example-button-div">
                            <button
                                className={toggleButtonActive ? "button-example1 active-togglebutton" : "button-example1"}
                                aria-pressed={toggleButtonActive ? 'true' : 'false'}
                                onClick={() =>
                                    setToggleButtonActive((prev) => !prev)}>
                                Klikkaa
                            </button>
                        </div>
                        <p>esimerkki koodiesimerkistä, ei ratkaisu värien käyttöön</p>
                        <div className="codeblock">
                            <CopyableCodeBlock aria-label="Kopoitava esimerkkikoodi"
    text={`<button aria-pressed="false"> Klikkaa </button>`}/>
                        </div>
                    </div>

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
                </div>
                <aside >
                    <CriteriaList
                        searchTerm={criteriaArray}
                        pageHeader={pageHeader}
                    />
                </aside>
            </div>
        </div>
    )
}