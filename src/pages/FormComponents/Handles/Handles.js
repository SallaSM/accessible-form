import '../../../styles.css';
import {Helmet} from "react-helmet-async";

export default function Handles() {
    return(
        <div>
            <Helmet>
                <title>Painikkeet - Helppokäyttöinen lomakesovellus</title>
            </Helmet>
            <div>
                <h2>Painikkeet</h2>
                <p>tähän tulee yleistä tietoa saavutettavista painikkeista</p>
            </div>
        </div>
    )
}