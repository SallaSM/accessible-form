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

    {/*   return(
        <>

    {items.map((criteria, index) => {
        console.log(criteria.tunniste)
        return( <>

        <li>
            <p>{criteria.tunniste}</p>

        </li>

</>)
    })}
            </>)

*/}
    return(
        <>
            {items.map((criteria, index) => {

                return (<>
                <li  className="criterialist">

                        <div>
                            <div className="text-button-div">
                                <p className="criteriaName">{criteria.tunniste} {criteria.nimi}</p>
                                <button
                                    className="arrow-button"
                                    aria-expanded={dropdown ? 'true' : 'false'}
                                    onClick={() =>
                                        setDropdown((prev) => !prev)
                                    }>

                                    <div>
                                        {dropdown ?
                                            (
                                                <IoIosArrowUp aria-label="Sulje alavalikko painike" color={"#2c84a4"}/>
                                            ) : (
                                                <IoIosArrowDown aria-label="Avaa alavalikko painike"/>
                                            )
                                        }
                                    </div>
                                </button>


                            </div>
                            {dropdown ?
                                <div className="criteria-info-box">
                                    <p aria-label="kriteeri taso" className="criteriaLevelBox">{criteria.taso}</p>
                                    <p>{criteria.selite}</p>
                                    {criteria.alaselite ? (
                                        <ul aria-label="" className="criteria-sublist">
                                            {criteria.alaselite.map((item, i) => {
                                                return <li key={i}>{item}</li>
                                            })}
                                        </ul>
                                    ) : ""
                                    }
                                    {criteria.lisaselite ? (
                                        <p>{criteria.lisaselite}</p>
                                    ) : ""
                                    }
                                    {criteria.huomautus ? (
                                        <div>
                                            {criteria.huomautus.map((item, i) => {
                                                return (
                                                    <div className="additional-note-div">
                                                        <p className="bold-text">HUOMAUTUS</p>
                                                        <p className="note-text" key={i}>{item}</p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    ) : ""
                                    }

                                    <a href={criteria.linkki} target="_blank">WCAG ohje kohtaan</a>
                                </div>
                                : <>
                                </>
                            }
                        </div>
                </li>
            </>
            );
            })}
</>
    );
};

export default CriteriaListItem;