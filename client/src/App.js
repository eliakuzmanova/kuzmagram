import "./global.css"
import {Routes, Route, useNavigate} from "react-router-dom"
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import PostContent from "./components/Profile/ProfilePosts/ProfilePost/PostContent/PostContent";
import Create from "./components/Create/Create"
import { useState } from "react";

import { AuthProvider } from './contexts/AuthContext';
// import { useLocalStorage } from "./hooks/useLocalStorage";


function App() {
  const navigate = useNavigate()


  return (
    <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile/:username' element={<Profile/>}/>
          <Route path='/post/:postId' element={<PostContent/>}/>
          <Route path="/create" element={<Create />}/>
        </Routes>
      </AuthProvider>
  );
}

export default App;
