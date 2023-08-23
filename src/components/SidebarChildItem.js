import {NavLink} from "react-router-dom";
import { useState } from "react"
import '../styles.css';
import {SidebarData} from "./SidebarData";
import Dropdown from "./Dropdown";

export default function SidebarChildItem({item}) {
    const [open, setOpen] = useState(true)
    const [underOpen, setUnderOpen] = useState(true)

    const handleClick = () => {
        setOpen(!open);
    }
    const handleUnderClick = () => {
        setUnderOpen(!underOpen);
    }
    return(
        <>

            <li key={item.index}> {/*className={item.cName}*/}
                <NavLink style={{color: 'red'}} key={item.index} to={item.path}>
                    <span>{item.title}</span>
                    <button key={item.index} onClick={handleUnderClick}>+</button>
                </NavLink>

                <div>
                    {underOpen ? <p></p> :

                        <ul>
                            {item.childrens.map((childchild, index) => {
                                return (
                                    <>
                                        <li style={{color: 'red'}} key={index}> {/*className={childchild.cName}*/}
                                            <NavLink id={index} to={childchild.path}>
                                                <span>{childchild.title}</span>
                                            </NavLink>
                                        </li>
                                    </>)
                            })}
                        </ul>
                    }</div>
            </li>

            </>
    )
}
