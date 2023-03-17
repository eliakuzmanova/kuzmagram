import "./global.css"
import {Routes, Route} from "react-router-dom"
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";



function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile/:username' element={<Profile/>}/>
        </Routes>
        </>
  );
}

export default App;
