import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {FaCopy, FaRegCopy} from "react-icons/fa";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";

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
                    aria-pressed={isCopied ? 'true' : 'false'}
                    >
                        {isCopied ?
                            (
                                <FaCopy aria-hidden={true} color={"#101044"}/>
                            ) : (
                                <FaRegCopy aria-hidden={true} color={"#101044"}/>
                            )
                        }
                    <span className="visually-hidden">Kopioi</span>
                </button>
            </CopyToClipboard>

    );
};

export default CopyBlockComponent;