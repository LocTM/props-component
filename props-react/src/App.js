import logo from './logo.svg';
import './App.css';
import {Welcome} from "./Welcome";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <>
     <Welcome name={"ADMIN"}/>
       <div className="container">
           <h2>React CRUD Tutorial</h2>
       </div>
   </>
  );
}

export default App;
