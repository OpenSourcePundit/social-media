import {Routes,Route} from "react-router-dom";


import { Loader } from './utils/utils';
import {LandingPage} from "./pages/landingpage/landingpage.jsx";
import {HomePage} from "./pages/homepage/homepage.jsx";
import {Login} from "./pages/login/login";
import {SignUp} from "./pages/signup/signup";
import './App.css';
import './base.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// import { useAuth } from './contexts/auth-context';
// import { useData } from './contexts/data-context';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bookmarks } from "./pages/bookmark/bookmark";
import { Profile } from "./pages/profile/profile";


function App() {
  
  // const { loader } = useData();
  return (
    <div className="App">
        {/* {loader && <Loader />}
      <ToastContainer
        position='bottom-right'
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        theme='colored'
        rtl={false}
        pauseOnFocusLoss
        draggable
      /> */}
       <Routes>
          <Route path="/" element={<LandingPage/>}  />
          <Route path="/login" element={ <Login/>}  />
          <Route path ="/signup" element={<SignUp/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/bookmark" element={<Bookmarks/>}/>
          <Route path="/profile" element={<Profile/>}/>

        </Routes>
    </div>
    
  );
}

export default App;
