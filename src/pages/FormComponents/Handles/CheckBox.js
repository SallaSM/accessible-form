import '../../../styles.css';
import {Helmet} from "react-helmet-async";
import FocusableHeader from "../../../components/FocusableHeader";
import React from "react";
/** IN PROGRESS
 TODO:
    - Checkbox is an input not a button, belongs under Inputfields
 */
export default function CheckBox() {
    const pageHeader="Valintaruutu";
    return(
        <div>
            <Helmet>
                <title>Valintaruutu - Helppokäyttöinen lomakesovellus</title>
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