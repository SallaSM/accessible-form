import '../styles.css';
import hellologo2 from ".././images/hellologo2.png";

/**
 * Header is the websites main header that contains the website logo.
 * Logo has alt-text for accessibility purposes.
 */
export function Header() {
    return(

            <header className="accessible-header-container-center accessible-header-container-start">
                 <img className="logo" src={hellologo2}  alt="helppokäyttöisen lomakesovelluksen logo" className="logo"/>
            </header>

    )
}