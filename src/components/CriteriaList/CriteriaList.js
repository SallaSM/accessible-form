import '../../styles.css';
import React, {createRef, useCallback, useEffect, useState} from "react";
import {CriteriaFilter} from "./CriteriaFilter";
import dropdown from "../Dropdown";

export function CriteriaList(props) {
    const searchTerm=props.searchTerm;
    const [dropdown, setDropdown] = useState(null);
    const [newDiv, setNewDiv]=useState(false)
    const handleDropdownClick = (index) => {
        setDropdown(dropdown === index ? null : index);

        if (dropdown === index){
            setNewDiv(true)
        }
    };


    return(
        <>
            <div className="col-4 col-s-12 float-right">
                {/* <h2 id="criteria-list-header">{props.pageHeader +"-elementtiin vaikuttavat WCAG kriteerit:"}  </h2>*/}
                <h2 id="criteria-list-header">{props.pageHeader +"-elementtiin vaikuttavat WCAG kriteerit:"}  </h2>

                <ul aria-labelledby="criteria-list-header" className="criteriabox">

                    {searchTerm?.map((item, index) => {
                            return (<>
                                     <CriteriaFilter
                                         func={handleDropdownClick}
                                         searchterm={item}
                                         listIndex={index}
                                         listDropdown={dropdown}
                                         div={newDiv}
                                        />

                            </> );

                        })}


                </ul>
            </div>
        </>
    )
}