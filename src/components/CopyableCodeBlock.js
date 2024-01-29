
import CopyBlockComponent from "./CopyBlockComponent";
import PrismCodeBlock from "./PrismCodeBlock";
{/**/}
const CopyableCodeBlock =(props) => {
    return (
        <div className="codeblock col-12 col-s-12">
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