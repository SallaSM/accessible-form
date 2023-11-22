import '../../styles.css';
import wcag from '../data/wcag.json'
import {useState} from "react";
import CriteriaListItem from "./CriteriaListItem";
import {CriteriaFilter} from "../CriteriaFilter";

export function CriteriaList(props) {
    const searchTerm=props.searchTerm;

    return(
        <>
            <div className="col-6 col-s-12 float-right">

                <ul className="criteriabox">
                    {searchTerm.map((item, index) => {
                        console.log(item + "   jejeo   " + index)
                        return (<>
                        {/*<CriteriaListItem
                            items={item}
                            key={index}

                        />*/}
                            <CriteriaFilter searchterm={item}/>
                        </>
                        );
                    })}
                </ul>
            </div>
        </>
    )
}