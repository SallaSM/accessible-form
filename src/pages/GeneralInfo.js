import '../styles.css';
import {Helmet} from "react-helmet-async";
import FocusableHeader from "../components/FocusableHeader";

export default function GeneralInfo() {
    const pageHeader="Yleistä saavutettavuudesta";
    {/* TODO:
    1. Sisältö tiedostoon ja sieltä luku komponentti.
    2. line brakes vai p
    3. sisältöinfo box runko erilliseen komponenttiin*/}
    return(

        <>
            <Helmet>
                <title>Yleistä saavutettavuudesta - Helppokäyttöinen lomakesovellus</title>
            </Helmet>
            <div className="non-scroll-page-container">
                <FocusableHeader header={pageHeader}/>
                <div className="col-11 col-s-11">
                    <div className="content-info">
                        <ul><h2>Sivun sisältö:</h2>
                            <li><a href="#apuvalinevaatimukset">Apuvälinevaatimukset</a></li>
                            <li> <a href="#nappaimistovaatimukset">Näppäimistövaatimukset</a></li>
                            <li><a href="#skaalautuvuus">Skaalautuvuus</a></li>
                            <li> <a href="#rakenne"> Rakenne</a></li>
                            <li> <a href="#wai-aria">WAI-ARIA</a></li>
                        </ul>
                    </div>
                    <p>Saavutettavuus on tekniikkaa, helppokäyttöisyyttä sekä sisällön ymmärrettävyyttä. Hyvin toteutetun digipalvelun lähdekoodi on rakenteeltaan loogista sekä HTML-standardeja ja WCAG-ohjeistuksia noudattavaa. Palvelun tulisi toimia hyvin erilaisilla avustavilla teknologioilla sekä päätelaitteilla. Käyttäjän tulisi pystyä etenemään palvelussa helposti ymmärrettävällä ja seurattavalla tavalla sekä pystyä vähällä vaivalla selvittämään mikä käytettävä elementti on ja mitä se tekee. </p>

                    <h2 id="apuvalinevaatimukset">Apuvälinevaatimukset</h2>
                    <p>On olemassa erilaisia aputekniikoita ja -välineitä, jotka on suunniteltu parantamaan verkkosivujen ja sovelluksien käytettävyyttä käyttäjille, joilla on erilaisia tarpeita. Apuvälineiden yhteensopivuus olisi hyvä ottaa huomioon digipalvelussa. Apuvälineisiin ja -tekniikoihin lukeutuu mm. ruudunlukijat, erilaiset päätelaitteen ohjaimet kuten kytkinohjaimet sekä vaihtoehtonäppäimistöt ja -hiiret. Lähdekoodin loogisella rakenteella sekä HTML-standardien mukaisuudella on erittäin suuri rooli yhteensopivuuden kannalta. </p>

                    <h2 id="nappaimistovaatimukset">Näppäimistövaatimukset</h2>
                    <p>Kaikki toiminnallisuus tulisi olla toteutettu siten, että se on käytettävissä näppäimistöllä. Näppäimistöllä hallintaan on määritelty WCAG-ohjeistuksia. </p>

                    <div className="wcag-criteria">
                        <h3>2.1.1 Näppäimistö [A]</h3>
                        <p>Kaikki sisällön toiminnallisuus on hallittavissa näppäimistörajapinnan välityksellä ilman vaatimusta yksittäisten näppäinpainallusten erityisestä ajoittamisesta, paitsi kun taustalla oleva toiminnallisuus vaatii syötettä, joka riippuu käyttäjän liikkeiden reitistä eikä vain päätepisteistä.
                            </p><p>
                            Huomautus: Tämä poikkeus liittyy sovelluksen toimintoon, ei syötetekniikkaan. Esimerkiksi käytettäessä käsinkirjoitettua tekstiä syötteenä, syötetekniikka (käsin kirjoittaminen) vaatii reitistä riippuvaa syötettä, kun taas sovelluksen toiminnallisuus (tekstin syöttö) ei sitä vaadi.
                            </p><p>
                            Huomautus: Tämä ei kiellä hiireen perustuvan syötteen tai muiden syötemenetelmien käyttämistä näppäimistön lisäksi, eikä tarkoitus ole kannustaa luopumaan niistä.
                        </p>
                    </div>
                    <p>Ohjeen 2.1.1 tarkoitus on varmistaa, että digipalvelun toiminnallisuuksiin tarjotaan mahdollisuus suorittaa toiminnot myös ainoastaan käyttäen näppäimistörajapintaa. Jos toiminto vaatii monimutkaisempia toimija, tulisi tarjota ja ohjeistaa käyttäjää, kuinka voi suorittaa toiminnon näppäimistöä käyttäen.
                        </p><p>
                        Esimerkki: Lomakkeen liitteen lisääminen raahaa ja tiputa tiedosto -toiminnolla.
                        </p><p>
                        Ratkaisu: Varmistetaan että liitteen lisäämiskohdan yhteydessä on Lisää tiedosto -painike, jonka kautta käyttäjä pääsee selaamaan tiedostoja näppäimistöä käyttäen.
                    </p>

                    <div className="wcag-criteria">
                        <h3>2.1.2 Ei näppäimistöansaa [A]</h3>
                        <p>Jos kohdistus voidaan siirtää sivun komponenttiin näppäimistörajapinnan kautta, niin kohdistus voidaan siirtää myös pois kyseiseltä komponentilta pelkästään näppäimistörajapintaa käyttämällä. Mikäli tämä vaatii muuta kuin pelkkien nuoli- tai tab-näppäimien tai muiden standardinmukaisten poistumismenetelmien käyttämistä, käyttäjälle neuvotaan menetelmä kohdistuksen poissiirtämiseksi.
                            </p><p>
                            Huomautus: Koska mikä tahansa sisältö, joka ei täytä tätä onnistumiskriteeriä, voi haitata käyttäjän mahdollisuuksia käyttää koko sivua, täytyy kaiken verkkosivun sisällön (riippumatta siitä käytetäänkö sitä täyttämään muita onnistumiskriteereitä vai ei) täyttää tämä onnistumiskriteeri.
                        </p>
                    </div>
                    <p>Ohjeen 2.1.2 tarkoitus on varmistaa, ettei näppäimistön kohdistus jää ansaan yhteenkään elementtiin tai toimintoon digipalvelussa.
                        </p><p>
                        Esimerkki: Lomakkeessa käytetään näkymään ilmestyviä valintaikkunaa, johon näppäimistökohdistus siirtyy jää rullamaan läpi sisältöä.
                        </p><p>
                        Ratkaisu: Sisällöstä on tarjottava pääsy pois esimerkiksi Esc-painikkeen avulla tai valintaikkunaan lisättyjen kuittauspainikkeiden avulla.
                    </p>

                    <div className="wcag-criteria">
                        <h3>2.1.4 Yhden merkin pikanäppäimet [A]</h3>
                        <p>Jos sisältöön on toteutettu näppäinoikotie, joka käyttää vain yhtä kirjain- (mukaan lukien pienet ja isot kirjaimet), välimerkki-, numero- tai symbolinäppäintä, vähintään yksi seuraavista pätee:
                            </p><p>
                            Pois päältä: On olemassa mekanismi, jolla näppäinoikotien voi ottaa pois käytöstä.
                        <br aria-hidden="true"/>
                            Uudelleenmäärittely: On olemassa mekanismi, jolla näppäinoikotie voidaan määritellä uudelleen käyttämään yhtä tai useampaa komentonäppäintä (Ctrl, Alt jne.).
                        <br aria-hidden="true"/>
                            Aktiivinen vain kohdistettaessa: Tietylle käyttöliittymäkomponentille tarkoitettu näppäinoikotie on käytössä vain, kun kohdistus on kyseisessä komponentissa.
                        </p>
                    </div>
                    <p>Ohjeen 2.1.4 tarkoitus on varmistaa, että ääniohjausta käyttävät käyttäjät sekä näppäilyvirheitä helposti tekevät käyttäjät pystyvät käyttämään digipalvelua ilman hämmennyksiä ja turhautumista. On huomioitavaa, että pikanäppäinten ei tulisi olla ainoa tapa suorittaa mitään toimintaa palvelussa.</p>

                    <h2 id="skaalautuvuus">Skaalautuvuus</h2>
                    <p>Oikein skaalautuva näkymä auttaa käyttäjää havaitsemaan ja ymmärtämään sisältöä. Skaalautuvuuteen vaikuttavia WCAG-ohjeistuksia on muutamia, joihin tulee kiinnittää huomiota lähdekoodissa.</p>

                    <div className="wcag-criteria">
                        <h3>1.4.4 Tekstin koon muuttaminen [AA]</h3>
                        <p>Lukuun ottamatta tekstitystä ja tekstiä esittäviä kuvia, tekstin kokoa voidaan muuttaa ilman avustavaa teknologiaa aina 200 prosenttiin asti ilman sisällön tai toiminnallisuuden menettämistä.</p>
                    </div>
                    <p> Ohjeen 1.4.4 tarkoitus on varmistaa, että käyttäjä joka, tarvitsee lukeakseen suurempaa tekstiä, ei menetä tekstiä suurentaessaan toiminnallisuuksia ja helppokäyttöisyys säilyy. Oikein skaalautuva sivu säilyttää täyden toimintansa aina kahteensataan prosenttiin asti. </p>

                    <div className="wcag-criteria">
                        <h3>1.4.10	Responsiivisuus [AA]</h3>
                        <p>Sisältö voidaan esittää ilman sisällön tai toiminnallisuuden menettämistä ja ilman kahdensuuntaista vierittämistä, kun

                            <br aria-hidden="true"/>- pystysuuntaan vieritettävän sisällön leveys on 320 CSS-pikseliä.
                            <br aria-hidden="true"/>-vaakasuuntaan vieritettävän sisällön korkeus on 256 CSS-pikseliä.
                            <br aria-hidden="true"/>
                            Lukuun ottamatta sisällön osia, jotka vaativat kahdensuuntaista esitystapaa käytön tai merkityksen vuoksi.
                            </p><p>
                            Huomautus: 320 CSS-pikseliä vastaa 1280 CSS-pikselin levyistä selainikkunaa, joka on zoomattu 400 % kokoiseksi. Vaakasuuntaan vieritettävässä sisällössä (esim. pystysuuntainen kirjoitus), 256 CSS-pikseliä vastaa 1024 px korkeaa selainikkunaa, joka on zoomattu 400 % kokoiseksi.
                            <br aria-hidden="true"/>
                            Huomautus: Esimerkkejä sisällöstä, joissa vaaditaan kahdensuuntaista esitystapaa, ovat kuvat, kartat, diagrammit, videopelit, esitykset, taulukkomuotoinen data ja käyttöliittymät, joissa on tarpeellista pitää työkalupalkki näkyvissä, kun käsitellään sisältöä.
                        </p>
                    </div>
                    <p>Ohjeen 1.4.10 tarkoitus on varmistaa, että sisältö pysyy ymmärrettävässä, käytettävässä ja luettavassa muodossa, vaikka sisällön tekstin kokoa suurennetaan. </p>

                    <h2 id="rakenne">Rakenne</h2>
                    <p>Selkeä ja oikein rakennettu lähdekoodi on tärkeässä osassa saavutettavaa digipalvelua. HTML-elementtien standardinmukainen käyttö tarjoaa jo työkaluja saavutettavuuden kannalta. Semanttisilla elementeillä on jo määriteltyjä attribuutteja, joita avustavat teknologiat tunnistavat. HTML tarjoaa myös maamerkkiroolit, jotka määrittävät käyttöliittymän eri osiot (header, nav, main, aside, section, footer). Nämä maamerkkiroolit pitävät palvelun rakenteen kunnossa ja avustavilla teknologioilla helposti navigoitavissa. Lomakkeessa rakennetta, selkeyttä ja semanttisuutta tuovia elementtejä ovat mm. form, input, button, label, fieldset.</p>

                    <h2 id="wai-aria">WAI-ARIA</h2>
                    <p>WAI-ARIA on lyhenne sanoista Web Accessibility Initiative – Accessible Rich Internet Applications. Se on kansainvälisen World Wide Web -konsortion W3C:n kehittämä standardi verkkosisältöjen toiminnallisuuksien saavutettavuuden parantamiseen. ARIA määrittelee joukon lisämääritteitä eli attribuutteja, jotka voidaan lisätä HTML-elementteihin lisäsemantiikan tarjoamiseksi ja saavutettavuuden parantamiseksi. Attribuuttien avulla voidaan välittää tietoa verkkosisällön rakenteesta ja käyttäytymisestä aputekniikoille, kuten ruudunlukuohjelmille.</p>
                    <p>ARIA-attribuutteja tarvitaan monissa tilanteissa, ja ne ovat hyödyllinen työkalu, kun niitä käytetään harkitusti. Näin saadaan laadukasta saavutettavaa sisältöä, jota käyttäjä pystyy hyödyntämään parhaalla mahdollisella tavalla.  Joissakin sivuston esimerkeissä on käytetty Aria-attribuutteja.</p>
                </div>
            </div>
            </>
    )
}