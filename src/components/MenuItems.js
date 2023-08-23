import React, {useCallback, useEffect, useRef, useState,} from 'react';
import Dropdown from './Dropdown';
import {NavLink, useNavigate} from 'react-router-dom';
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";



const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);
    const focusOnRef= useRef(null);
    const [depthLevelCounter, setDepth] = useState(depthLevel);




    function handleOpenDropdown(e){
    setDropdown((prev) => !prev)
        {dropdown === false ? (
            setDepth(0)

        ):(
            setDepth(1)
        )}
        console.log(depthLevelCounter);
    }


    const escFunction = useCallback((event) => {
            if (event.key === "Escape") {
                console.log("ennen loop " + depthLevelCounter);
                {
                    if(depthLevelCounter===0){
                        setDropdown(false)}


                    depthLevelCounter > 0 ? (
                        setDropdown(false)


                    ) : (


                        depthLevelCounter === 0 ? (

                                setDropdown(!dropdown)

                            ):
                            (
                                setDropdown(!dropdown)
                            )

                    )
                }
                console.log("eskin jälkeen " + depthLevelCounter + depthLevel);

            }
        },
        []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);


        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);





        {/*1. esc näppäimellä sulkeminen
       2. kun hyppää seuraavaan osioon esim komponenttien sisällä, edellisen tulisi suleutua
       2. aktiivinene button, väri muuttuu (onko tarpeen?)
       4. focusta seuraavan borderin manipulointi väri, muoto...
       5. alimman listan kohdan kohdalla painaesssa tab tulisi kohdistuksen siirtä ensimmäiseen kohtaan
       */
        }

        return (
            <li
                className="menu-items"
            >
                {items.path && items.submenu ? (
                    <>
                        <div className="link-button-div">
                            {depthLevel === 0 ? (
                                <NavLink to={items.path} > {items.title}</NavLink>
                            ) : (
                                <NavLink to={items.path}>{items.title}</NavLink>
                            )}
                            <div className="button-div">
                                <button
                                    ref={focusOnRef}
                                    aria-expanded={dropdown ? 'true' : 'false'}
                                    onClick={() =>
                                       /* setDropdown((prev) => !prev)*/
                                        handleOpenDropdown()
                                }

                                >


                                    {depthLevel > 0 ? (
                                        <div>
                                            {dropdown
                                                ?
                                                <IoIosArrowUp aria-label="Sulje alavalikko painike"  color={"#2c84a4"}/>
                                                : <IoIosArrowDown aria-label="Avaa alavalikko painike"/>

                                            }
                                        </div>
                                    ) : (
                                        <div>
                                            {dropdown
                                                ?
                                                <IoIosArrowUp aria-label="Sulje alavalikko painike" color={"#2c84a4"}/>
                                                : <IoIosArrowDown aria-label="Avaa alavalikko painike" />

                                            }
                                        </div>
                                    )}
                                </button>
                            </div>
                        </div>

                        <div>
                            <Dropdown
                                depthLevel={depthLevel}
                                submenus={items.submenu}
                                dropdown={dropdown}
                            />
                        </div>

                    </>
                ) : (
                    <NavLink to={items.path}>{items.title}</NavLink>
                )}
            </li>
        );
    };


export default MenuItems;