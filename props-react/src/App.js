import logo from './logo.svg';
import './App.css';
import {Welcome} from "./Welcome";
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from "./components/create";
import {Delete} from "./components/delete";
import {Edit} from "./components/edit";
import AddComponent from "./components/AddComponent";
import {FAddComponent} from "./components/FAddComponent";
import {ChangeBackgroundColor} from "./components/ChangeBackgroundColor";
import Hello from "./components/Hello";
import {Component} from "react";

export default class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            display: true
        }
    }
    delete = () => {
        this.setState({display: false})
    }
    render() {
        let comp;
        if (this.state.display){
            comp = <Hello />
        }
        return(
            <div style={{ textAlign: 'center' }}>
                {comp}
                <button onClick={this.delete}>
                    Delete the component
                </button>
            </div>
        );
    }
}

