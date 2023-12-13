import '../../styles.css';
import React, {createRef, useCallback, useEffect, useState} from "react";
import {CriteriaFilter} from "./CriteriaFilter";
import dropdown from "../Dropdown";
import FocusableSecondHeader from "../FocusableSecondHeader";

export function CriteriaList(props) {
    const searchTerm=props.searchTerm;
    const [dropdown, setDropdown] = useState(null);
    const handleDropdownClick = (index) => {
        setDropdown(dropdown === index ? null : index);
        if(dropdown === index){

        }
        console.log( index + " dropdown index= "+ dropdown + "   list item key " + "jeje")
    };

    {/*
        - listan avaus ja kiinni littamisen visuaalinen ilme. Hitaampi liike.
    */}

    return(
        <>
            <div className="col-6 col-s-12 float-right">
                <ul className="criteriabox">
                    <div>
                    {/*  <FocusableSecondHeader header= {props.pageHeader +"-elementtiin vaikuttavat WCAG kriteerit:"}/>*/}
                        <h2>{props.pageHeader +"-elementtiin vaikuttavat WCAG kriteerit:"}  </h2>

                    {searchTerm?.map((item, index) => {
                            return (<>
                                     <CriteriaFilter
                                         func={handleDropdownClick}
                                         searchterm={item}
                                         listIndex={index}
                                         listDropdown={dropdown}
                                        />

                            </> );

                        })}
                         </div>

                </ul>
            </div>
        </>
    )
}