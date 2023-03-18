import "./global.css"
import {Routes, Route} from "react-router-dom"
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import PostContent from "./components/Profile/ProfilePosts/ProfilePost/PostContent/PostContent";
import Create from "./components/Create/Create"


function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile/:username' element={<Profile/>}/>
          <Route path='/post/:postId' element={<PostContent/>}/>
          <Route path="/create" element={<Create />}/>
        </Routes>
        </>
  );
}

export default App;
