import { createContext, useContext, useState } from 'react';
import { ToastType } from '../utils/constants';
import { LoginService,SignUpService } from '../services/services';
import { ToastHandler } from '../utils/utils';
import { useNavigate} from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({children}) =>{

    const navigate = useNavigate();
    const [isLoggedIn,setIsLoggedIn] = useState();
    const localStorageToken = JSON?.parse(localStorage?.getItem('loginItems'));
    const [token, setToken] = useState(localStorageToken?.token);
    const [currUser, setCurrUser] = useState(localStorageToken?.user);

    const loginHandler = async (username, password) => {
      try{
        const {data: {foundUser , encodedToken},status} = await LoginService({username,password});
          if(status === 200 ){
            localStorage.setItem('loginItems',JSON.stringify({token:encodedToken,user:foundUser}));
            setCurrUser(foundUser);
            setToken(encodedToken);
            setIsLoggedIn(true);
            ToastHandler(ToastType.Success, `Logged in as ${foundUser.name} !`);
            
            navigate("/home")
          }
        }
      catch (err) {
          console.log(err);
          ToastHandler(ToastType.Error, `${err.response.data.errors}`);

        }
      };


      const logoutHandler = () => {
        localStorage.removeItem('loginItems');
        setToken(null);
        setCurrUser(null);  
        setIsLoggedIn(false);
        ToastHandler(ToastType.Success, "Logged Out Successfully !");
        navigate("/")
      };


      const signupHandler = async (username, password,email,name) => {
       console.log("fromemail",email,"name",name,"username",username,"password",password);
        try {
          const {
            data: { createdUser, encodedToken },
            status,
          } = await SignUpService({ name, username, password,email});
          
          if (status === 200 || status === 201) {
            setIsLoggedIn(true);
            localStorage.setItem(
              'loginItems',
              JSON.stringify({ token: encodedToken, user: createdUser })
            );
            setCurrUser(createdUser);
            setToken(encodedToken);
            
            ToastHandler(ToastType.Success, `Successfully signed Up as ${createdUser.name}`);
           
          } 
        } catch (err) {
          console.log(err);
          ToastHandler(ToastType.Error, `${err?.response?.data?.errors}`);
        }
      };



      return (
        <AuthContext.Provider
          value={{ token, loginHandler, currUser, signupHandler, logoutHandler,setCurrUser,isLoggedIn}}
        >
          {children}
        </AuthContext.Provider>
      );
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };