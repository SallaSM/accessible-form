import '../../styles.css';
import wcag from '../data/wcag.json'
import {useState} from "react";
import CriteriaListItem from "./CriteriaListItem";

export function CriteriaList() {


    return(
        <ul className="criteriabox"

        >
            {wcag.map((criteria, index) => {
                return (<>
                        <CriteriaListItem
                            items={criteria}
                            key={index}
                        />

                    </>
                );
            })}
        </ul>
    )
}