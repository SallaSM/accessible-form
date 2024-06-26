import '../../../styles.css';
import {Helmet} from "react-helmet-async";
import {CriteriaList} from "../../../components/CriteriaList/CriteriaList";
import React, {useState} from "react";
import FocusableHeader from "../../../components/FocusableHeader";
/** IN PROGRESS*/
export default function RadioButton() {
    const pageHeader="Radiopainike / Radiobutton ";

    return(
       <>
            <Helmet>
                <title>Radiopainike / Radiobutton - Helppokäyttöinen lomakesovellus</title>
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