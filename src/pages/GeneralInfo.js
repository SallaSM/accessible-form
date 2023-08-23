import '../styles.css';
import {Helmet} from "react-helmet-async";

export default function GeneralInfo() {
    return(
        <div>
            <Helmet>
                <title>Saavutettava lomake - Helppokäyttöinen lomakesovellus</title>
            </Helmet>
            <div>
                <h2>Yleistä tietoa saavuettavasta lomakkeesta</h2>
            </div>
        </div>
    )
}