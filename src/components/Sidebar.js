import { useState } from "react"
import '../styles.css';
import SidebarItem from "./SidebarItem";
import {SidebarData} from "./SidebarData";
import items from "./sideData.json"

export default function Sidebar(){

    return (
        <>
            <nav>
                <ul>

            <div className="sidebar">
                { items.map((item, index) =>  <SidebarItem key={index} item={item} /> ) }

            </div>
                </ul>
            </nav>

            {/*<nav>

                    oikea rivi      { items.map((item, index) =>  <SidebarItem key={index} item={item} /> ) }

                <ul>
                    { SidebarData.map((item, index) => {
                        return <SidebarItem key={index} item={item} />;
                       console.log(SidebarItem);
                    })}

                </ul>
            </nav>*/}

        </>
    )
}


