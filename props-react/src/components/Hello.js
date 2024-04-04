import {Component} from "react";

export default class Hello extends Component{
    componentWillUnmount() {
        alert("Component sap bi an")
    }
    render() {
        return(
            <><h1>Hello World</h1></>
        )
    }
}