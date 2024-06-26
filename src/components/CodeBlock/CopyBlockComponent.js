import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {FaCopy, FaRegCopy} from "react-icons/fa";

/**
 * CopyBlockComponent is a button that uses reacts 'copy-to-clipboard-component'.
 * Button has timer that sets the button to initial state (isCopied = false / true).
 * isCopied state is used:
    - to manipulate the looks in the active and inactive states.
    - to give visually hidden alert to screen reader about the action of the button for accessibility purposes.

 * Props:
    - textToCopy (string): The text content that will be copied to the clipboard when the button is clicked.
 */
const CopyBlockComponent = ({ textToCopy }) => {
    const [isCopied, setIsCopied] = useState(false);
    {/*aria-label={isCopied ? 'Esimekkikoodi kopioitu leikepöydälle' : 'Kopioi esimerkkikoodi'}*/}

    const handleCopy = () => {
        setIsCopied(true);

        setTimeout(() => {
            setIsCopied(false);
        }, 5000);
    };

    return (

            <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
                <button
                    className="copy-button"
                    title="Kopioi esimerkkikoodi leikepöydälle"
                    >
                        {isCopied ?
                            (
                                <>
                                    <FaCopy aria-hidden={true} color={"#101044"}/>
                                    <span role="alert" className="visually-hidden" >Kopioitu</span>
                                </>
                            ) : (
                                <>
                                    <FaRegCopy aria-hidden={true} color={"#101044"}/>
                                    <span className="visually-hidden">Kopioi</span>
                                </>
                            )
                        }

                </button>
            </CopyToClipboard>

    );
};

export default CopyBlockComponent;