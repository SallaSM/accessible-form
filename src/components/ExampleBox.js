/**
 * ExampleBox is a frame for examples used in the pages.
 *
 * Props:
 * - title: gets title via props.
 * - example: Gets the example and sets it to the center of the example box.
 */
const ExampleBox =(props) => {
    return (
        <div className="example-content">
            <div className="code-example-header">
                <h3>Esimerkki: {props.title} </h3>
            </div>
            <div className="example-flex-box">
                {props.example}
            </div>
        </div>
    )
}

export default ExampleBox;