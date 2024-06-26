import CopyBlockComponent from "./CopyBlockComponent";
import PrismCodeBlock from "./PrismCodeBlock";

/**
 * CopyableCodeBlock is a frame for example code-element.
 * Component passes through props that is text.
 *
 * Props:
  - Text-props is passed to PrismCodeBlock that displays the text correct way and
    CopyBlockComponent that offers opportunity to copy the code text to clipboard.
 */

const CopyableCodeBlock =(props) => {
    return (
        <div className="codeblock-div col-12 col-s-12">

                <div className="code-example-header">
                    <h3>Koodiesimerkki </h3>
                </div>
            <div className="codeblock ">
                <div className="flex-box">

                   <PrismCodeBlock text={props.text}/>

                    <div className="float-up-right">
                        <CopyBlockComponent textToCopy={props.text} />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CopyableCodeBlock;