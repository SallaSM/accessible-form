import '../../styles.css';
import wcag from '../data/wcag.json'
import React, {useCallback, useEffect, useState} from "react";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";

const CriteriaListItem =({items, searchTerm}) => {
    const [dropdown, setDropdown] = useState(false);
    const [sublist, setSublist ]= [];



    {/*}const searchTerm="1.1.1";
      const filterData = (searchTerm) => {
        const filteredData = items.filter((criteria) =>
            criteria.tunniste.includes(searchTerm)
        );
        setFilteredData(filteredData);
    };

    filterData("1.1.1");*/}

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
                 {items.tunniste === searchTerm ?(
                <div>
                    <div className="text-button-div">
                        <p className="criteriaName">{items.tunniste} {items.nimi}</p>
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
                            <div className="criteria-info-box">
                                <p  aria-label="kriteeri taso" className="criteriaLevelBox">{items.taso}</p>
                                <p >{items.selite}</p>
                                { items.alaselite ?(
                                <ul  aria-label=""  className="criteria-sublist">
                                    {items.alaselite.map((item, i) => {
                                        return <li key={i}>{item}</li>
                                    })}
                                </ul>
                                ): ""
                                }
                                { items.lisaselite ?(
                                    <p>{items.lisaselite}</p>
                                ): ""
                                }
                                { items.huomautus ?(
                                   <div>
                                       {items.huomautus.map((item, i) =>{
                                           return(
                                           <div className="additional-note-div">
                                                <p className="bold-text">HUOMAUTUS</p>
                                                <p className="note-text"  key={i}>{item}</p>
                                           </div>
                                           )
                                       })}
                                   </div>
                                    ): ""
                                }

                                <a href={items.linkki} target="_blank" >WCAG ohje kohtaan</a>
                            </div>
                            : <>
                            </>
                        }

                    </div>
                   ):(" ")}

            </li>

</>    );
};

export default CriteriaListItem;