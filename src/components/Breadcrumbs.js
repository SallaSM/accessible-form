import {Link, useLocation} from "react-router-dom";
import {SidebarData} from "./SidebarData";
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import {IoIosArrowForward} from "react-icons/io";

export default function Breadcrumbs() {
    const location=useLocation()
    let currentLink=""
    const crumbname="";
    const crumbs= location.pathname.split("/")
        .filter(crumb => crumb !== "")
        .map(crumb =>{
            currentLink += `/${crumb}`




            return(
                <div className="breadcrumb" key={crumb}>
                    <Link to={currentLink} >{crumb} </Link>
                    <IoIosArrowForward aria-hidden="true" className="arrow-icon"/>
                </div>
            )
        })
    return(<>
        {/* <div>
            {Object.key(SidebarData).map((key, i) =>
            key={i}
                if (key.path===currentLink){
                    crumbname=key.title
            }
            )}
        </div>*/}

        <nav aria-label="Murupolku" className="col-12 col-s-12 breadcrumbs">
            {crumbs}
        </nav>

</> )}

