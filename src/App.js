import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";

function App() {
  return (//todo componente de react debe tener una etiqueta 
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element = {<Home/>}/>
        <Route path = '/profile' element = {<Profile/>}/>
        <Route path='*' element ={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;