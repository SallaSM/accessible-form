import '../../styles.css';
import wcag from '../data/wcag.json'
import React, {useCallback, useEffect, useState} from "react";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";

const CriteriaListItem =({items}) => {
    const [dropdown, setDropdown] = useState(false);

    const escFunction = useCallback((event) => {
            if (event.key === "Escape") {
                setDropdown(false)
            }},
        []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);



    return(
        <>

            <li className="criterialist" >
                <div>
                    <div className="text-button-div">
                        <p className="criteriaName">{items.nimi}</p>
                        <button
                            className="arrow-button"
                            aria-expanded={dropdown ? 'true' : 'false'}
                            onClick={() =>
                                setDropdown((prev) => !prev)
                            }>

                            <div>
                                {dropdown ?
                                    (
                                    <IoIosArrowUp aria-label="Sulje alavalikko painike"  color={"#2c84a4"}/>
                                    ):(
                                        <IoIosArrowDown aria-label="Avaa alavalikko painike"/>
                                    )
                                }
                            </div>
                        </button>


                    </div>
                        {dropdown ?
                            <div>
                                <p className="criteriaLevelBox">{items.taso}</p>
                                <p>{items.selite}</p>
                                <a href={items.linkki} target="_blank" >WCAG ohje kohtaan</a>
                            </div>
                            : <>
                            </>
                        }
                    </div>


            </li>

</>    );
};

export default CriteriaListItem;