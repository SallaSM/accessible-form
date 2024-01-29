import PrismCodeBlock from "./PrismCodeBlock";
import CopyBlockComponent from "./CopyBlockComponent";

const ExampleBox =(props) => {
    return (
        <div className="example-content">
            <div className="code-example-header">
                <h3>Esimerkki </h3>
            </div>
            <div className="example-flex-box">
                {props.example}

            </div>
        </div>
    )
}


export default ExampleBox;