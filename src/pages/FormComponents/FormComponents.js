import '../../styles.css';
import {Helmet} from "react-helmet-async";
import FocusableHeader from "../../components/FocusableHeader";
import {CriteriaList} from "../../components/CriteriaList/CriteriaList";

/**
 * FormComponents is a top level page in the website. It holds information overall about form components and
   a criteria list that includes all criteria associated with digital forms.
 * The page consists of accessible header <FocusableHeader>, text snippets <p> and a list of criteria <CriteriaList>.
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

export default function FormComponents() {
    const pageHeader="Lomake-elementti"
    const criteriaArray=["1.1.1","1.3.1","1.3.2","1.3.3","1.3.4","1.3.5","1.4.1","1.4.3","1.4.4","1.4.10","1.4.11","1.4.12","1.4.13","2.1.1","2.1.2","2.2.1","2.4.3","2.4.6","2.4.7","2.5.1","2.5.2","2.5.3","3.2.1","3.2.2","3.2.4","3.3.1","3.3.4","4.1.1","4.1.2","4.1.3" ];
    return(
        <div>
            <Helmet>
                <title>Lomake-elementti - Helppokäyttöinen lomakesovellus</title>
            </Helmet>
            <div>
                <div className="non-scroll-page-container">
                    <div id="content" className="page-container col-8 col-s-12">
                        <FocusableHeader header={pageHeader}/>
                        <p>Lomakkeessa tärkeitä piirteitä saavutettavuuden kannalta ovat mm. komponenttien nimeäminen, toisiinsa liittyvät komponenttien ryhmitteleminen, ohjeiden tarjoaminen,
                            syötteiden validointi sekä palautteen anto käyttäjälle.
                            Muun muassa näillä keinoilla tarjotaan käyttäjälle mahdollisuus ymmärtää mikä on lomakkeen tarkoitus ja kuinka sitä käytetään. </p>
                        <p>Seuraavaksi käydään läpi WCAG kriteerejä, jotka olisi hyvä huomioida saavutettavuuden kannalta ohjelmoidessa lomake-elementtiä.
                            Käydään tarkemmin läpi yleisesti lomakkeen rakenteeseen ja toimintaan sekä ulkonäköön liittyviä kriteerejä. </p>
                       <h2>Lomakkeisiin yleisesti vaikuttavat WCAG 2.1 -ohjeistuksen A- ja AA-tason onnistumiskriteerit</h2>
                        <div className="criteria-div">
                            <h3>1.1.1	Ei-tekstuaalinen sisältö (A)</h3>
                            <p>Kaikki käyttäjälle esitettävä sisältö, joka ei ole tekstiä, tulee varustaa tekstivastineella, joka välitetään käyttäjälle esimerkiksi ruudunlukijan avulla.
                                Lomakkeessa esimerkiksi kuvat ja kuvakkeet tarvitsevat korvaavan tekstin välittämään tietoa, mikä elementin sisältö ja tarkoitus on.
                                Vaihtoehtoisiin teksteihin voidaan käyttää esimerkiksi aria-label-, aria-labelledby-attribuutteja tai kuvissa alt-tekstiä.
                                Näiden käyttötapauksista komponenttikohtaisia esimerkkejä sivulla Syötekentät. </p>

                            <h3>1.3.1 Informaatio ja suhteet (A)</h3>
                            <p>Informaatiota, rakennetta ja suhteita elementtien välillä välitetään usein visuaalisesti käyttäjälle.
                                Pelkkä visuaalinen informaation välitys ei riitä vaan tulee tarjota myös ohjelmallisesti selvitettäviä keinoja.
                                Esimerkiksi validoinnin jälkeen virheellisen syötekentän syötön merkkaaminen ainoastaan punaisilla ääriviivoilla ei riitä välittämään informaatiota virheestä käyttäjälle.
                                Tulisi tarjota esimerkiksi virheestä kertova ikoni syötekentän viereen, jonka tekstivastine välittää tiedon virheestä. Esimerkkejä sivuilla Validointi, Painike, Valintapainike.</p>

                            <h3>1.3.2 Merkitykseen vaikuttava järjestys (A)</h3>
                            <p>Jos lukujärjestyksellä on merkitystä sisällön ymmärtämisessä, lukujärjestyksen tulee olla myös ohjelmallisesti oikeassa järjestyksessä.
                                Lomakkeessa etenemisjärjestyksellä on merkitystä, kun lomaketta ymmärretään avustavien teknologioiden avulla.
                                Esimerkiksi ruudunlukijan varassa olevan käyttäjän tulee pystyä sisäistämään lomakkeen rakennetta näkemättä lomakkeen visuaalista ilmettä.
                                Avustavat teknologiat seuraavat sivun dokumenttipuuta. Järjestykseen vaikuttaa HTML-rakenne ja elementtien yhteys toisiinsa.
                                </p>
                            <p>
                                Erityistä huomiota tulee kiinnittää, jos lomakkeessa on komponentteja ryhmittäin tai kolumneissa.
                                Silloin tulisi käyttäjän pystyä siirtymään niiden välillä ymmärrettävässä järjestyksessä.
                                Ohjelmallinen järjestys ei aina vastaa visuaalista ilmettä. Kunhan varmistetaan että visuaalisesti merkityksellinen viesti välittyy myös avustaville tekniikoille.
                                Esimerkki sivulla Valintapainike.
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
        </div>
    )
}