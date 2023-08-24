import {SidebarData} from "./SidebarData";
import MenuItems from './MenuItems';

const Navbar = () => {



    return (
        <>

        <nav aria-label="Päänavigaatio">
            <ul className="menus"

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


        </>
    );

};

export default Navbar;