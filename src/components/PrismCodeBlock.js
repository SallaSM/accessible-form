import React from "react";
import Prism from "prismjs";
import "../prism.css";

class PrismCodeBlock extends React.Component {
    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        return( <>
            <pre>
               <code className="language-javascript">
                    {this.props.text}
               </code>
           </pre>


        </>)
    }
}

export default PrismCodeBlock;