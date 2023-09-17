import '../styles.css';
import {Helmet} from "react-helmet-async";
import {CriteriaList} from "../components/CriteriaList/CriteriaList";

export default function MainPage() {


    return(
        <>

            <Helmet>
                <title>Etusivu - Helppokäyttöinen lomakesovellus</title>
                <meta name="description" content="Helppokäyttöinen lomakesovellus-sivusto on luotu tiedottamaan saavutettavuudesta ja helppokäyttöisen lomakkeen rakentamisesta."/>
            </Helmet>

            <div className="page-container">

                <h2>Etusivun sisältö</h2>



                    <div className="col-6 col-s-12"><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p> </div>
                    <div className="col-6 col-s-12 float-right">
                         <CriteriaList/>
                    </div>


                <div className="next-button-div">
                    <button className="next-page-button"> Painike</button>
            </div>
        </div>
    </>
    )
}

