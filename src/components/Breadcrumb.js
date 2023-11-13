import {Link, useLocation} from "react-router-dom";
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import {SidebarData} from "./SidebarData";
import {IoIosArrowForward} from "react-icons/io";
{/*aria-current=location!!*/}
export default function Breadcrumbs() {

    const breadcrumbs = useBreadcrumbs(SidebarData);
    const location = useLocation();


        return (
            <nav aria-label="Murupolku" >
                <ol className="col-12 col-s-12 breadcrumbs">
                {breadcrumbs.map(({ match, breadcrumb}) => (
                    <li className="breadcrumb" >
                    <Link key={match.pathname} to={match.pathname} aria-current={location.pathname === match.pathname ? 'page' : false}>
                            {breadcrumb}
                    </Link>
                        <IoIosArrowForward aria-hidden="true" className="arrow-icon"/>
                    </li>

                ))}        </ol>
            </nav>
        );
    }


