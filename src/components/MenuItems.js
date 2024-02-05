import React, {useCallback, useEffect, useRef, useState,} from 'react';
import Dropdown from './Dropdown';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";




const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);
    const focusOnRef= useRef(null);
    const location = useLocation();


    {/*esc koodi: https://stackoverflow.com/questions/37440408/how-to-detect-esc-key-press-in-react-and-how-to-handle-it*/}
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





        return (

            <li
                className="menu-items"
            >
                {items.path && items.submenu ? (
                    <>
                        <div className="link-button-div">
                            {depthLevel === 0 ? (
                                <NavLink
                                    aria-current={location.pathname === items.path ? 'page' : false}
                                    to={items.path}
                                > {items.title}</NavLink>
                            ) : (
                                    <NavLink   aria-current={location.pathname === items.path ? 'page' : false} to={items.path}>{items.title}</NavLink>
                                    )}
                                <div className="button-div">
                                <button
                                    ref={focusOnRef}
                                    aria-expanded={dropdown ? 'true' : 'false'}
                                    onClick={() =>
                                       setDropdown((prev) => !prev)
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


                            <Dropdown
                                depthLevel={depthLevel}
                                submenus={items.submenu}
                                dropdown={dropdown}
                            />


                    </>
                ) : (
                    <NavLink aria-current={location.pathname === items.path ? 'page' : false}  to={items.path}>{items.title}</NavLink>
                )}
            </li>

        );

    };


export default MenuItems;

