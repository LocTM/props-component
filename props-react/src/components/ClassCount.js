import {Component} from "react";

export default class ClassCount extends Component{
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }
    increase = () =>{
        this.state({number : this.state.number + 1})
    }
}