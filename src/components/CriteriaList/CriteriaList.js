import '../../styles.css';
import React, {useState} from "react";
import {CriteriaFilter} from "./CriteriaFilter";

/**
 * Criterialist collects frames for the list in the view and holds and handles the dropdown value. Value is checked in CriteriaListItem.js
 * List gets component header as props from the page component that uses it.
 * Criteria list passes through information for CriteriaFilter and forward to CriteriaListElement.
 * The handleDropdownClick function is send as props to CriteriaListItem so it can be manipulated in there.
 * Dropdown works with props back and forth between Criterialist and CriteriaListItem.
 Criterialistitem gets index. When opened the dropdown get the index number and new div is opened.
 When the dropdown button is clicked again, setDropdown method sets dropdown to null and div gets closed.

 TODO:
    -Add correct links to WCAG.JSON
 */

export function CriteriaList(props) {
    const searchTerm=props.searchTerm;
    const [dropdown, setDropdown] = useState(null);
    const [newDiv, setNewDiv]=useState(false)

    {/*Dropdown is explained above */}
    const handleDropdownClick = (index) => {
        setDropdown(dropdown === index ? null : index);

        if (dropdown === index){
            setNewDiv(true)
        }
    };

    return(
        <>
            <div className="col-4 col-s-12 float-right">
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