import '../styles.css';
import Breadcrumbs from "./Breadcrumbs";
import hellologo from ".././images/hellologo.png";


export function Header() {
    return(
        <header className="accessible-header-container" >
             <img src={hellologo}  alt="helppokäyttöisen lomakesovelluksen logo" className="logo"/>

        </header>
    )
}