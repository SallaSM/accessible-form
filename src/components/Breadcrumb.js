import {Link, useLocation} from "react-router-dom";
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import {SidebarData} from "./data/SidebarData";
import {IoIosArrowForward} from "react-icons/io";

/**
 * Breadcrumbs is a navbar label as "Murupolku" for accessibility.
 * Breadcrumb names are fetched SidebarData dataset row breadcrumb .
 * The react useLocation()-hook is used to track the path.
 The useLocation-hook enables comparing paths and giving the correct outcome to the interface.
 location.pathname returns current URL.
 If the location pathname is equal to breadcrumb path, the item is last on its nav list and is span element that is in text and has aria-current=page-attribute.
 Else the span has a link directed to the path that the item stands for.
 * Current span needs aria-current=page attribute for accessibility purposes. Aria-current-attribute is given to last span.

 TODO: There is a bug in reading submenu breadcrumb texts.
 */
export default function Breadcrumb() {
    const breadcrumbs = useBreadcrumbs(SidebarData);
    const location = useLocation();


        return (
            <div className="b">
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
                       >
                         {breadcrumb}
                    </Link>
                        )}
                <IoIosArrowForward aria-hidden="true" className="arrow-icon"/>
                    </li>

                    ))}
                </ol>
                )}
            </nav>
    </div>
        );
    }


