import "./global.css"
import { Routes, Route, useNavigate} from "react-router-dom"
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";

import EditProfile from "./components/Profile/EditProfile/EditProfile";
import {useState } from "react";

import Create from "./components//Create/Create";
import { AuthProvider } from './contexts/AuthContext';
import { NavContext } from "./contexts/NavContext";



function App() {

const [navClicked, setNavClicked] =useState({
  createClicked: false,
  searchClicked:false
})
 const navigate = useNavigate()
  const [image, setImage] = useState("")
 const [createdPost, setCreatedPost] = useState(false)

  function onModalClose(e, post) {
    setNavClicked(true)
    setImage("")
    
    if(post) {
      setCreatedPost(state => Object.assign(state, post))
     navigate("/")
    }
   
   
  }

  return (
    <AuthProvider>
      <NavContext.Provider value= {
        {navClicked, setNavClicked}}>

        <Routes>
          <Route path='/' element={<Home  createdPost={createdPost? true: false} setCreatedPost={setCreatedPost}/>}/>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile/:username' element={<Profile setNavClicked={setNavClicked}/>} />
          <Route path='/profile/edit' element={<EditProfile/>} />    
        </Routes>
        {navClicked.createClicked &&
          <Create
            onModalClose={onModalClose}
            image={image}
            setImage={setImage}
          />}
      </NavContext.Provider>
    </AuthProvider>
  );
}

export default App;