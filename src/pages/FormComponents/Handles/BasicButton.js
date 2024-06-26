import '../../../styles.css';
import {Helmet} from "react-helmet-async";
import {CriteriaList} from "../../../components/CriteriaList/CriteriaList";
import React, {createRef, useEffect, useRef, useState} from "react";
import FocusableHeader from "../../../components/FocusableHeader";
import CopyableCodeBlock from "../../../components/CodeBlock/CopyableCodeBlock";
import CopyBlockComponent from "../../../components/CodeBlock/CopyBlockComponent";
import PrismCodeBlock from "../../../components/CodeBlock/PrismCodeBlock"
/** IN PROGRESS*/
export default function BasicButton() {
    const pageHeader="Kerran painettava painike ";
    return(
        <>
        <Helmet>
            <title>Kerran painettava painike - Helppokäyttöinen lomakesovellus</title>
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