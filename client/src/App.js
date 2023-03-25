import "./global.css"
import { Routes, Route} from "react-router-dom"
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import PostContent from "./components/Profile/ProfilePosts/ProfilePost/PostContent/PostContent";
import EditProfile from "./components/Profile/EditProfile/EditProfile";
import { useState } from "react";

import Create from "./components//Create/Create";
import { AuthProvider } from './contexts/AuthContext';
import { NavContext } from "./contexts/NavContext";



function App() {

  const [postCreated, setPostCreated] = useState(false)
  const [createClicked, setCreateClicked] = useState(false)
  const [image, setImage] = useState("")
  function onModalClose() {
    setCreateClicked(false)
    setImage("")

  }


  return (
    <AuthProvider>
      <NavContext.Provider value={setCreateClicked}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile/:username' element={<Profile postCreated={postCreated}/>} />
          <Route path='/profile/edit' element={<EditProfile/>} />    
        </Routes>
        {createClicked &&
          <Create
            onModalClose={onModalClose}
            image={image}
            setImage={setImage}
            setPostCreated={setPostCreated}
          />}
      </NavContext.Provider>
    </AuthProvider>
  );
}

export default App;