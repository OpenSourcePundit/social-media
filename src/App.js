import { useEffect } from "react";
import {Routes,Route,useLocation,Navigate} from "react-router-dom";


import { Loader } from './utils/utils';
import {LandingPage} from "./pages/landingpage/landingpage.jsx";
import {HomePage} from "./pages/homepage/homepage.jsx";
import {Login} from "./pages/login/login";
import {SignUp} from "./pages/signup/signup";
import { ExplorePage } from "./pages/explore/explorepage";
import './App.css';
import './base.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { useAuth } from "./context/auth-context";
import { useData } from './context/data-context';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bookmarks } from "./pages/bookmark/bookmark";
import { ProfilePage } from "./pages/profilepage/profilepage";
import { TestPage } from "./pages/testpage";
import { Modals } from "./allmodals";


function App() {
  
  // const { loader } = useData();
  const location = useLocation();
  const {isLoggedIn, } = useAuth();
  

  const RequiresAuth = ({children, isLoggedIn})=>{
     const location = useLocation();
     return isLoggedIn ? children :( <Navigate to="/"  state={{from:location}} />)
     
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  return (
    <div className="App">
        {/* {loader && <Loader />} */}
      <ToastContainer
        position='bottom-right'
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        theme='colored'
        rtl={false}
        pauseOnFocusLoss
        draggable
      />

{console.log("state",location?.state)}
       <Routes>
          {/* <Route path="/" element={<LandingPage/>}  /> */}
          <Route path="/" element={isLoggedIn
          ? (location?.state !== null)
            ? <Navigate to={location?.state?.from?.pathname} />
            : <Navigate to="/home" />
          : <LandingPage/>} />

          <Route path="/login" element={ <Login/>}  />
          <Route path ="/signup" element={<SignUp/>} />
          <Route path="/home" element={<RequiresAuth isLoggedIn={isLoggedIn}><HomePage/></RequiresAuth>} />
          <Route path="/explore" element={<RequiresAuth isLoggedIn={isLoggedIn}><ExplorePage/></RequiresAuth>} />
          <Route path="/bookmarks" element={<RequiresAuth isLoggedIn={isLoggedIn}><Bookmarks/></RequiresAuth>} />
          <Route path="/profile/:username" element={<RequiresAuth isLoggedIn={isLoggedIn}><ProfilePage/></RequiresAuth>} />
          <Route path="/test" element={<TestPage/>}/>



        </Routes>

        
      <Modals/>

        
    </div>
    
  );
}

export default App;
