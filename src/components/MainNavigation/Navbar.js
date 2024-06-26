import {SidebarData} from "../data/SidebarData";
import MenuItems from './MenuItems';
import {Outlet} from "react-router-dom";

/**
 * Navbar builds the frame to the main navigation.
 * Contains ul element inside nav element.
 * Li -elements are used inside MenuItems-component.
 * Navbar passes data from SidebarData-dataset by mapping the set and sending props.
 * depthLevel is used to track dropdowns. It is checked and/or manipulated in MenuItems- and Dropdown-component.
 */
const Navbar = () => {
    return (
        <>
            <nav aria-label="Päänavigaatio" className="col-3  col-s-12" >
                <ul className="navdiv">
                    {SidebarData.map((menu, index) => {
                        const depthLevel = 0;
                        return (<>
                            <MenuItems
                                items={menu}
                                key={index}
                                depthLevel={depthLevel}
                            />
                            </>
                        );
                    })}
                </ul>
            </nav>
            {/* <Outlet />*/}
        </>
    );
};
export default Navbar;