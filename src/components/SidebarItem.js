import { useState } from "react"
import '../styles.css';
import {Link, NavLink, useMatch, useResolvedPath} from "react-router-dom";
import {SidebarData} from "./SidebarData";
import Dropdown from "./Dropdown";
import items from "./sideData.json";
import SidebarChildItem from "./SidebarChildItem";

export default function SidebarItem({item}){
    const [open, setOpen] = useState(true)
    const [underOpen, setUnderOpen] = useState(true)

    const handleClick= () =>{
        setOpen(!open);
    }
    const handleUnderClick= () =>{
        setUnderOpen(!underOpen);
    }




        if (item.childrens) {
            return (
                <>

                    <li key={item.index}> {/*className={item.cName}*/}
                        <NavLink id={item.index} to={item.path}>
                            <span>{item.title}</span>
                            <button onClick={handleClick }>+</button>

                        </NavLink>

                        <div>
                            {open? <p></p>:

                                <ul>
                                     {item.childrens.map((child, index) => {

                                        if (child.childrens){
                                            return (
                                                <>
                                                { item.childrens.map((item, index) =>  <SidebarChildItem key={index} item={item} />)}


                                                    {/*    <div className="sidebar">
                                                        { items.map((item, index) => <SidebarItem key={index} item={item} />) }
                                                    </div>}*/}

                                                {/*<li key={child.index} className={child.cName}>
                                                        <NavLink key={child.id} to={child.path}>
                                                            <span>{child.title}</span>
                                                            <button key={child.index} onClick={handleUnderClick}>+</button>
                                                        </NavLink>

                                                        <div>
                                                            {underOpen? <p></p>:

                                                                <ul>
                                                                    {child.childrens.map((childchild, index) => {
                                                                        return(
                                                                            <>
                                                                                <li style={{ color: 'red' }} key={childchild.id} className={childchild.cName}>
                                                                                    <NavLink id={childchild.index} to={childchild.path}>
                                                                                        <span>{childchild.title}</span>
                                                                                    </NavLink>
                                                                                </li>
                                                                            </>)
                                                                    })}
                                                                </ul>
                                                            }</div>
                                                    </li>*/}
                                                </>)

                                        }else {
                                            return (
                                                <>
                                                    <li>jeejeekö</li>
                                                    <li key={index}>   {/*className={child.cName}>*/}
                                                        <NavLink to={child.path}>
                                                            <span>{child.title}</span>
                                                        </NavLink>
                                                    </li>
                                                </>
                                            )}
                                    })}
                                </ul>
                            }
                        </div>
                    </li>
                </>
            )
        } else {
            return (
                <>
                    <li key={item.index} className={item.cName}>
                        <NavLink to={item.path}>
                            <span>{item.title}</span>
                        </NavLink>
                    </li>

                </>
            )
        }



}
