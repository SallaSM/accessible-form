import '../styles.css';
import {Link, NavLink, useMatch, useResolvedPath} from "react-router-dom";

export default function Navigation() {

    return(
        <nav role="navigation" aria-label="Pää navigaatio palkki" >
            <  ul id="menubar" role="menubar" >
                <li role="none">
                    <NavLink to="/"
                             aria-label="Etusivu. Tututstu etusivuun"
                             role="menuitem">
                        Etusivu
                    </NavLink>
                </li>
                <li role="none">
                    <NavLink to="/general_info"
                             aria-label="saavutettava lomake. Yleistä tietoa saavutettavasta lomakkeesta ja komponenteista"
                             role="menuitem">
                        Saavutettava lomake
                    </NavLink>
                </li>
                <ul role="menu">
                    <NavLink to="/form_components"
                             role="menuitem"
                             aria-haspopup="true"
                             aria-expanded="true"
                             >
                        Lomake komponentit
                    </NavLink>
                    <ul role="menu">
                        <NavLink role="menuitem"
                                 aria-haspopup="true"
                                 aria-expanded="true"
                                 to="/form_components/handles"
                                 aria-label="Painikkeet. Tietoa lomakkeen painike komponenteista.">
                            Painikkeet
                        </NavLink>
                        <li role="none">
                            <NavLink to="/form_components/handles/radiobutton"
                                     role="menuitem">
                                Radiopainike / Radiobutton
                            </NavLink>
                        </li>
                        <li role="none">
                            <NavLink to="/form_components/handles/checkbox"
                                     role="menuitem">
                                Valintaruutu
                            </NavLink>
                        </li>
                    </ul>
                    <ul role="menu">
                        <NavLink role="menuitem"
                                 aria-haspopup="true"
                                 aria-expanded="true"
                                 to="/form_components/inputfields"
                                 aria-label="Syöttökentät. Tietoa lomakkeen syöttökenttä komponenteista.">
                            Syöttö kentät
                        </NavLink>
                        <li role="none">
                            <NavLink to="/form_components/inputfields/autocomplete"
                                     role="menuitem">
                                Automaattinen täydennys/ Autocomplete
                            </NavLink>
                        </li>
                    </ul>
                </ul>
            </ul>
        </nav>

    )
}
function CustomLink({ to,children,...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive= useMatch({path: resolvedPath.pathname, end: true})

    return(
        <li className={isActive ? "active": ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}