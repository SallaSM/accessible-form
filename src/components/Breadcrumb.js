import {Link, useLocation} from "react-router-dom";
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import {SidebarData} from "./SidebarData";
import {IoIosArrowForward} from "react-icons/io";
{/*aria-current=location!!*/}
export default function Breadcrumb() {

    const breadcrumbs = useBreadcrumbs(SidebarData);
    const location = useLocation();


        return (
            <nav aria-label="Murupolku" >
                {location.pathname === '/'  ? (
                <p aria-hidden="true" > </p>
                ):(
                <ol className="col-12 col-s-12 breadcrumbs">
                {breadcrumbs.map(({ match, breadcrumb}) => (
                    <li className="breadcrumb" >
                        {location.pathname === match.pathname ? (
                            <span aria-current='page' className="breadcrumb-last"> {breadcrumb}</span> ):(

                    <Link key={match.pathname}
                          to={match.pathname}
                          aria-current={location.pathname === match.pathname ? 'page' : false}>
                         {breadcrumb}
                    </Link>
                        )}
                <IoIosArrowForward aria-hidden="true" className="arrow-icon"/>
                    </li>

                    ))}
                </ol>
                )}
            </nav>
        );
    }


