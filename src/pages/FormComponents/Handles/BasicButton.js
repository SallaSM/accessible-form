import '../../../styles.css';
import {Helmet} from "react-helmet-async";

export default function BasicButton() {
    return(
        <div>
            <Helmet>
                <title>Painike - Helppokäyttöinen lomakesovellus</title>
            </Helmet>
            <div>
                <h2>Painike / Button</h2>
            </div>
        </div>
    )
}