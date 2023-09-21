import '../styles.css';
import Breadcrumbs from "./Breadcrumbs";

export function Header() {
    return(
        <header className="accessible-header-container" >
               <h1>Helppokäyttöinen lomakesovellus</h1>
            <Breadcrumbs/>
        </header>
    )
}