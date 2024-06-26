import React from "react";
import Prism from "prismjs";
import "../../prism.css";

/**
 * PrismCodeBlock gets text (string) as prop and displays it as correctly highlighted code.
 * PrismCodeBlock uses Prism component from prismjs for highlighting.
 */

class PrismCodeBlock extends React.Component {
    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        return( <>
            <pre>
               <code className="language-html">
                    {this.props.text}
               </code>
           </pre>


        </>)
    }
}

export default PrismCodeBlock;