import '../../styles.css';
import React, {useCallback, useEffect, useRef, useState} from "react";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import CriteriaDropdown from "../CriteriaDropdown";

const CriteriaListItem =(props) => {


    const escFunction = useCallback((event) => {
            if (event.key === "Escape") {
                props.func(null)
            }},
        []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);

  {/*


    const [dropdown, setDropdown] = useState(false);
    const [dropdown, setDropdown] = useState(null);*/}



    {/*     const handleDropdownClick = (index) => {
        setDropdown(dropdown === index ? null : index);
        console.log( index + " dropdown index= "+ dropdown + "   list item key " + indexx + "jeje")
    };

    dropdownin index numero pitäisi saada ylemmästä tasosta
        nyt dopclickin indexi on tämän listakomponentin indexi
        vertailu komponentin indexin ja klikattavan indexin välillä*/}

    {/*   const escFunction = useCallback((event) => {
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


    useEffect(() => {
        buttonRef.current.addEventListener('click', handleClick);
        return () => {
            buttonRef.current.removeEventListener('click', handleClick);
        };
    }, []);

       const handleClick = useCallback((event) => {
        const currentTarget = event.currentTarget.getAttribute("id")
        if(event.currentTarget.getAttribute("id") !== items.index){
            setDropdown(false);
            console.log("eventcurrent" + currentTarget )
        }},
        []);
     return(
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

            onClick={(e) =>
              setDropdown((prev) => !prev)
              }
 <div className="text-button-div"> </div>

*/}
    return(
        <>
            {props.items.map((criteria) => {
                const tunniste=(criteria.tunniste + criteria.nimi).replace(/ /g, '');
                const taso= "Kriteerin taso " + criteria.taso.split('').join(' ');

                return (<>
                    <li id={tunniste} key={criteria.tunniste} className={`criterialist ${props.listDropdown === props.listIndex ? 'active' : ''}`} >

                        <div className="text-button-div">
                            <h3 className="criteriaName">{criteria.tunniste} {criteria.nimi}    </h3>

                            <button
                                aria-labelledby={tunniste}
                                className="arrow-button"
                                aria-expanded={props.listDropdown === props.listIndex ? 'true' : 'false'}
                                onClick={() => props.func(props.listIndex)
                            }
                            >

                                <div>
                                    {props.listDropdown === props.listIndex ?

                                        (
                                            <IoIosArrowUp aria-hidden={true} color={"#2c84a4"}/>
                                        ) : (
                                            <IoIosArrowDown aria-hidden={true} />
                                        )
                                    }
                                </div>
                            </button>
                        </div>
                    </li>

                    {props.listDropdown === props.listIndex &&(
                        <div className="criteria-info-box">
                            {/*paragraphDescription added for screenreader to be able to read criterialevel correctly*/}
                            <div id="paragraphDescription" className="sr-only">{taso}</div>

                            <p className="criteriaLevelBox"
                               aria-hidden={true}
                               aria-describedby="paragraphDescription">{criteria.taso}</p>

                            <p>{criteria.selite}</p>
                            {criteria.alaselite ? (
                                <ul className="criteria-sublist">
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

                            <a  href={criteria.linkki} target="_blank"> Lue lisää kriteeristä {tunniste} (Vie ulkoiseen palveluun)</a>



                        </div>

                        )}
            </>
            );
            })}
</>
    );


};
export default CriteriaListItem;

