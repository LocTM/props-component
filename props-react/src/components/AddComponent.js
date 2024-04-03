import {Component} from "react";

export default class AddComponent extends Component{
    constructor(props) {
        super(props);
        this.state={

        }
    }
    render() {
        return(
            <>
                <h1>Total: {this.props.n1 + this.props.n2}</h1>
            </>
        )
    }
}