import {Component} from "react";

export default class Create extends Component{
    constructor(props) {
        super(props);
        this.state={
        }
    }

    render() {
        return(
            <>
                <h1>DAY LA TRANG CREATE {this.props.name}</h1>
            </>
        )

    }
}