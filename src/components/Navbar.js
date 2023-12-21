import {SidebarData} from "./SidebarData";
import MenuItems from './MenuItems';
import {Outlet} from "react-router-dom";

const Navbar = () => {



    return (
        <>

        <nav aria-label="Päänavigaatio" className="col-3  col-s-12" >
            <ul

            >
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

            <Outlet />

        </>
    );

};

export default Navbar;