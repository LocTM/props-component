import logo from './logo.svg';
import './App.css';
import {Welcome} from "./Welcome";
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from "./components/create";
import {Delete} from "./components/delete";
import {Edit} from "./components/edit";

function App() {
  return (
   <>
       <Create name={"Createeeee"} ></Create>
       <Delete name={"Deleteeeee"}></Delete>
       <Edit name={"Edittttt"}></Edit>
     <Welcome name={"ADMIN"}/>
       <div className="container">
           <h2>React CRUD Tutorial</h2>
       </div>
   </>
  );
}

export default App;
