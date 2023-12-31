import '../../../styles.css';
import {Helmet} from "react-helmet-async";
import {CriteriaList} from "../../../components/CriteriaList/CriteriaList";
import {useState} from "react";
import FocusableHeader from "../../../components/FocusableHeader";

export default function RadioButton() {
    const [buttonActive, setButtonActive] = useState(false);
    const [buttonText, setButtonText] = useState( "Klikkaa Painiketta");
    const criteriaArray=["1.1.1", "1.2.4", "1.2.5", "1.3.3", "1.4.10"]
    const pageHeader="Radiopainike";

    const handleClick = () => {
        setButtonActive((prev) => !prev);

        {buttonActive ? (
            setButtonText("Klikkaa painiketta")
        ):(
            setButtonText("Painiketta Klikattu"))
        }
    };

    return(
        <section>
        <Helmet>
            <title>Radiopainike / Radiobutton - Helppokäyttöinen lomakesovellus</title>
        </Helmet>

        <div className="non-scroll-page-container">

            <div id="content" className="page-container">

                <FocusableHeader header={pageHeader}/>

                <div className="col-6 col-s-12">
                    <h2>Saavutettava painike esimerkki</h2>
                    <div className="example-button-div">
                        <button className={buttonActive ? "button-example1 activebutton" : "button-example1"}
                                aria-pressed={buttonActive ? 'true' : 'false'}
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

                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> </div>

                    <pre>
                                <p>Koodi esimerkki: </p>
                                <code>
                                    &lt;button <p>className='btnexample' <br />
                                            aria-pressed={buttonActive ? 'true' : 'false'}<br />
                                            onClick={() =>
                                        " handleClick() "}</p>&gt;

                                    <p> {buttonText}</p>
                                    &lt;/button&gt;
                                </code>
                            </pre>

                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>


                </div>



                <CriteriaList
                    searchTerm={criteriaArray}
                    pageHeader={pageHeader}
                />






                <div className="next-button-div">
                    <button className="next-page-button"> Seuraava sivu</button>
                </div>
            </div>
        </div>
    </section>)
}