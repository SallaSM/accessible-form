import {Component, createRef} from "react";

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