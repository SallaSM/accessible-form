import {a11yLight, CodeBlock, CopyBlock, dracula, github} from 'react-code-blocks';
import {FaCopy} from "react-icons/fa";
import copy from 'copy-to-clipboard';
import CopyBlockComponent from "./CopyBlockComponent";
import PrismCodeBlock from "./PrismCodeBlock";

const CopyableCodeBlock =(props) => {
    return (
        <div>
            <div className="code-example-header">
                <h3>Koodiesimerkki </h3>
            </div>
            <div className="flex-box">

               <PrismCodeBlock text={props.text}/>

                <div className="float-up-right">
                    <CopyBlockComponent textToCopy={props.text} />
                </div>
            </div>
        </div>
    )
}


export default CopyableCodeBlock;