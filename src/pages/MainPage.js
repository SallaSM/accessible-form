import '../styles.css';
import {Helmet} from "react-helmet-async";

export default function MainPage() {


    return(
        <div>
            <Helmet>
                <title>Etusivu - Helppokäyttöinen lomakesovellus</title>
                <meta name="description" content="Helppokäyttöinen lomakesovellus-sivusto on luotu tiedottamaan saavutettavuudesta ja helppokäyttöisen lomakkeen rakentamisesta."/>
            </Helmet>
            <div >
                <h2>Etusivun sisältö</h2>
                <button>Painike</button>
            </div>
        </div>
    )
}

