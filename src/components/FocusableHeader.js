import {Component, createRef} from "react";

/**
 * Focusable header is h1-level mainheader. Its is needed and used in the website to offer accessibility.
 When navigating to new page on the site, main content reloads.
 The focus from navigation is directed to mainheader to tell the user that content has changed and user is in the new page.
 This is needed to offer accessible service.

 * headingRef= createRef(): is used to manipulate the focus. It is used in h1-element that this component returns.
 * H1-element gets its content with props. 
 */

class FocusableHeader extends Component {
    headingRef = createRef()

    componentDidMount() {
        this.headingRef.current.focus()
    }

    render() {
        return (
            <h1
                ref={this.headingRef}
                className="focusableHeader"
                tabIndex="-1" >
                {this.props.header}
            </h1>
        )
    }
}

export default FocusableHeader