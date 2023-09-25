import '../../../styles.css';
import {Helmet} from "react-helmet-async";
import {CriteriaList} from "../../../components/CriteriaList/CriteriaList";
import {useState} from "react";

export default function BasicButton() {
    const [buttonActive, setButtonActive] = useState(false);
    const [buttonText, setButtonText] = useState( "Klikkaa Painiketta");

    const handleClick = () => {
        setButtonActive((prev) => !prev);

        {buttonActive ? (
            setButtonText("Klikkaa painiketta")
            ):(
            setButtonText("Painiketta Klikattu"))
        }
    };

    return(
        <div>
            <Helmet>
                <title>Painike - Helppokäyttöinen lomakesovellus</title>
            </Helmet>

            <div className="scroll-page-container">

                <div className="page-container">

                    <h2>Painike / Button</h2>

                    <div className="col-6 col-s-12">
                        <h3>Saavutettava painike esimerkki</h3>
                        <div className="example-button-div">
                            <button className={buttonActive ? "button-example1 activebutton" : "button-example1"}
                                    onClick={() =>
                                    handleClick()
                            }>
                                {buttonText}
                            </button>
                        </div>

                        {/*  {explanation ?
                            (
                        <div className="criteria-explanation-text-div">
                            <p>Painoit painiketta</p>
                        </div>
                            ):
                            <div className="criteria-explanation-text-div">
                                <p> </p>
                            </div>
                        }*/}

                        <div className="criteria-explanation-text-div">
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>

                    </div>
                    <div className="col-6 col-s-12 float-right">
                        <ul className="criteriabox">
                            <CriteriaList searchTerm={"1.1.1"}/>
                            <CriteriaList searchTerm={"1.2.2"}/>
                            <CriteriaList searchTerm={"1.3.5"}/>
                            <CriteriaList searchTerm={"1.4.5"}/>
                            <CriteriaList searchTerm={"1.4.7"}/>
                            <CriteriaList searchTerm={"1.4.10"}/>
                        </ul>
                    </div>


                    <div className="next-button-div">
                        <button className="next-page-button"> Seuraava sivu</button>
                    </div>
                </div>
            </div>
        </div>

    )
}