import '../styles.css';
import hellologo from ".././images/hellologo.png";


export function Header() {
    return(

            <header className="accessible-header-container-center accessible-header-container-start">
                 <img src={hellologo}  alt="helppokäyttöisen lomakesovelluksen logo" className="logo"/>
            </header>

    )
}