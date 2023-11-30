import {Component, createRef} from "react";

class FocusableSecondHeader extends Component {
    headingRef = createRef()

    componentDidMount() {
        this.headingRef.current.focus()
    }

    render() {
        return (
            <h2
                ref={this.headingRef}
                className="focusableHeader"
                tabIndex="-1" >
                {this.props.header}
            </h2>
        )
    }
}

export default FocusableSecondHeader