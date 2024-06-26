import '../../../styles.css';
import {Helmet} from "react-helmet-async";
import React from "react";
import FocusableHeader from "../../../components/FocusableHeader";
/** IN PROGRESS*/
export default function InputValidation() {
    const pageHeader="Syötteen validointi ";
    return(
        <>
            <Helmet>
                <title>Syötteen validointi - Helppokäyttöinen lomakesovellus</title>
            </Helmet>
            <div className="non-scroll-page-container">
                <div  id="pagecontent" className="page-container col-8 col-s-12">
                    <FocusableHeader header={pageHeader}/>
                    <p>Sisältöä räätälöidään..</p>
                </div>
            </div>

        </>
    )
}