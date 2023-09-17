import {SidebarData} from "./SidebarData";
import MenuItems from './MenuItems';

const Navbar = () => {



    return (
        <>

        <nav aria-label="Päänavigaatio" className="col-3 col-s-3 menus" >
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



        </>
    );

};

export default Navbar;