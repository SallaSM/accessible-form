import {SidebarData} from "./SidebarData";
import Breadcrumb from "./Breadcrumb";

const Navbar = () => {

    return (
        <>


                <ul>
                    {SidebarData.map((menu, index) => {
                        return (<>
                                <Breadcrumb
                                    items={menu}
                                    key={index}
                                />

                            </>
                        );
                    })}
                </ul>




        </>
    );

};

export default Navbar;