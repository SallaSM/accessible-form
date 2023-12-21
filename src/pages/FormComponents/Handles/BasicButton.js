import '../../../styles.css';
import {Helmet} from "react-helmet-async";
import {CriteriaList} from "../../../components/CriteriaList/CriteriaList";
import {createRef, useEffect, useRef, useState} from "react";
import FocusableHeader from "../../../components/FocusableHeader";
import CopyableCodeBlock from "../../../components/CopyableCodeBlock";
import CopyBlockComponent from "../../../components/CopyBlockComponent";
import PrismCodeBlock from "../../../components/PrismCodeBlock"

export default function BasicButton() {

    const [button1Active, setButton1Active] = useState(false);
    const [button2Active, setButton2Active] = useState(false);
    const [buttonText, setButtonText] = useState( "Klikkaa");
    const criteriaArray=["1.4.3", "2.1.1","2.1.2", "2.4.3", "2.4.7", "3.2.2","4.1.2"];
    const pageHeader="Painikkeet";


    const handleToggleClick = () => {
        setButton2Active((prev) => !prev);
    };

    const handleBasicClick = () => {
        setButton1Active(true)
        setButtonText("Klikattu")

    };

    return(
        <div>

            <Helmet>
                <title>Painike - Helppokäyttöinen lomakesovellus</title>
            </Helmet>


            <div className="non-scroll-page-container">
                <div id="content" className="page-container col-8 col-s-12">
                    <FocusableHeader header={pageHeader}/>

                    <div id="first-section">
                        <h2>Kerran klikattava painike</h2>
                        <div className="example-button-div">
                            <button
                                className={button1Active ? "button-example1 active-basicbutton" : "button-example1"}
                                aria-pressed={button1Active ? 'true' : 'false'}
                                aria-label="Kerran klikattava painike -esimerkki"
                                onClick={() =>
                                    handleBasicClick()}>
                                {buttonText}
                            </button>


                        </div>
                        {/*
                             {explanation ?
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>


                    <div className="codeblock">
                        <CopyableCodeBlock aria-label="Kopoitava esimerkkikoodi"
text={`<button 
    className={buttonActive ? "button-example1 active-basicbutton" : "button-example1"}
    aria-pressed={buttonActive ? 'true' : 'false'}
    onClick={() =>
        handleClick()} >
    {buttonText}
<button>`}/>

                    </div>

                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>


                    </div>

                    <div id="second-section">
                        <h2>Useasti klikattava painike</h2>
                        <div className="example-button-div">
                            <button
                                className={button2Active ? "button-example1 active-togglebutton" : "button-example1"}
                                aria-pressed={button2Active ? 'true' : 'false'}
                                onClick={() =>
                                handleToggleClick()}>
                                Klikkaa
                        </button>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>

                        <div className="codeblock">
                            <CopyableCodeBlock aria-label="Kopoitava esimerkkikoodi"
                                               text={`<button 
    className={buttonActive ? "button-example1 active-basicbutton" : "button-example1"}
    aria-pressed={buttonActive ? 'true' : 'false'}
    onClick={() =>
        handleClick()} >
    {buttonText}
<button>`}/>

                        </div>

                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    {/* <aside>
                     <CriteriaList
                         searchTerm={criteriaArray}
                         pageHeader={pageHeader}
                        />
                    </aside>*/}





                </div>
                <aside >
                    <CriteriaList
                        searchTerm={criteriaArray}
                        pageHeader={pageHeader}
                    />
                </aside>

                {/*  <div className="next-button-div">
                <button className="next-page-button"> Seuraava sivu</button>
            </div>*/}
            </div>

        </div>
    )
}