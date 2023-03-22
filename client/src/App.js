import "./global.css"
import {Routes, Route, useNavigate} from "react-router-dom"
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import PostContent from "./components/Profile/ProfilePosts/ProfilePost/PostContent/PostContent";
import Create from "./components/Create/Create"
import { useState } from "react";
import * as authService from "./services/authService"
// import { useLocalStorage } from "./hooks/useLocalStorage";


function App() {
  const navigate = useNavigate()
  const [auth, setAuth] = useState({})
 

  const userLogin = async (email,password) => {
    console.log("hello ");
   const token = await authService.login(email,password)
   setAuth(state => ({...state, email,password, token}));
   navigate("/")
  }

  // const userLogout = (authData) => {
  //   setAuth({});
  // }
  return (
    <>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/register' element={<Register userLogin={userLogin}/>}/>
          <Route path='/login' element={<Login userLogin={userLogin}/>}/>
          <Route path='/profile/:username' element={<Profile/>}/>
          <Route path='/post/:postId' element={<PostContent/>}/>
          <Route path="/create" element={<Create />}/>
        </Routes>
        </>
  );
}

export default App;
