import '../../styles.css';
import {Helmet} from "react-helmet-async";
import FocusableHeader from "../../components/FocusableHeader";
import React from "react";

/**IN PROGRESS*/
export default function ChangingView() {
    const pageHeader="Muuttuva näkymä";
    return(
        <div>
            <Helmet>
                <title>Muuttuva näkymä - Helppokäyttöinen lomakesovellus</title>
            </Helmet>

            <div className="non-scroll-page-container">
                <div  id="pagecontent" className="page-container col-8 col-s-12">
                    <FocusableHeader header={pageHeader}/>
                    <p>Sisältöä räätälöidään..</p>
                </div>
            </div>
        </div>
    )
}