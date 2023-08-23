import '../../styles.css';
import {Helmet} from "react-helmet-async";

export default function ChangingView() {
    return(
        <div>
            <Helmet>
                <title>Muuttuva näkymä - Helppokäyttöinen lomakesovellus</title>
            </Helmet>
            <div>
                <h2>Muuttuva näkymä</h2>
            </div>
        </div>
    )
}