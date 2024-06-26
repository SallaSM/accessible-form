import React, {useCallback, useEffect, useRef, useState,} from 'react';
import Dropdown from './Dropdown';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";

/**
 * MenuItems returns li-element. The content inside the li-element depends if has a submenu or not.
 If item has no submenu, result is simple NavLink.
 If item has submenu result is link with dropdown button.
 *
 * Props:
    - items: Contains data from SidebarData. Can be used following way: items.[key]
    - depthLevel (number): Is determined by the depth level of the submenus.
    Is manipulated in Dropdown.js.

 * dropdown= setDropdown(): keeps track on dropdown state. State affects to dropdownbutton icons and aria-expanded-attribute.
 * location = useLocation(): is used to for aria-current usage. Check if current 'location.path' is the path of the li-element.
   If equal, 'aria-current=page'. Aria-current is used for accessibility.

 TODO:
    - Ref check
 */

const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);
    const location = useLocation();
    const itemLabel= items.title + "alavalikko" ;

    {/* REF CHECK
    //check if there is a need for ref in the button element. Is it for accessibility?
        const focusOnRef= useRef(null);
        ref={focusOnRef}/>*/}

    {/*The esc-function offers possibility to close dropdown list by using Esc-key on keyboard. Function is added to dropdown list for accessibility purposes.
    esc koodi: https://stackoverflow.com/questions/37440408/how-to-detect-esc-key-press-in-react-and-how-to-handle-it*/}
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
        <li className="menu-items">
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
                                aria-label={itemLabel}
                                aria-expanded={dropdown ? 'true' : 'false'}
                                onClick={() =>
                                   setDropdown((prev) => !prev)
                                }
                            >
                                {depthLevel > 0 ? (
                                    <div>
                                        {dropdown
                                            ?

                                            <IoIosArrowUp aria-hidden="true"  color={"#2c84a4"}/>
                                            : <IoIosArrowDown aria-hidden="true" />
                                        }
                                    </div>
                                ) : (
                                    <div>
                                        {dropdown
                                            ?
                                            <IoIosArrowUp aria-hidden="true"   color={"#2c84a4"}/>
                                            : <IoIosArrowDown  aria-hidden="true" />
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

