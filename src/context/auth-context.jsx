import { createContext, useContext, useState } from 'react';
import { ToastType } from '../utils/constants';
import { LoginService,SignUpService } from '../services/services';
import { ToastHandler } from '../utils/utils';


const AuthContext = createContext();

const AuthProvider = ({children}) =>{

    const localStorageToken = JSON.parse(localStorage.getItem('loginItems'));
    const [token, setToken] = useState(localStorageToken?.token);
    const [currUser, setCurrUser] = useState(localStorageToken?.user);

    const loginHandler = async (username, password) => {
      try{
        const {data: {foundUser , encodedToken},status} = await LoginService({username,password});
          if(status === 200 ){
            localStorage.setItem('loginItems',JSON.stringify({token:encodedToken,user:foundUser}));
            setCurrUser(foundUser);
            setToken(encodedToken);
            ToastHandler(ToastType.Success, "Login Successful !");

          }
        }
      catch (err) {
          console.log(err);
          ToastHandler(ToastType.Error, `${err.response.data.errors}`);

        }
      };
      const logoutHandler = () => {
        ToastHandler(ToastType.Success, "Logged Out Successfully !");
        localStorage.removeItem('loginItems');
        setToken(null);
        setCurrUser(null);
      };
      const signupHandler = async (name, username, password,email) => {
        console.log("fromemail",email,"name",name,"username",username,"password",password);
        try {
          const {
            data: { createdUser, encodedToken },
            status,
          } = await SignUpService({ name, username, password,email});
          if (status === 200 || status === 201) {
            localStorage.setItem(
              'loginItems',
              JSON.stringify({ token: encodedToken, user: createdUser })
            );
            setCurrUser(createdUser);
            setToken(encodedToken);
            ToastHandler(ToastType.Success, 'Successfully signed Up');
          } 
        } catch (err) {
          console.log(err);
          ToastHandler(ToastType.Error, `${err?.response?.data?.errors}`);
        }
      };



      return (
        <AuthContext.Provider
          value={{ token, loginHandler, currUser, signupHandler, logoutHandler,setCurrUser}}
        >
          {children}
        </AuthContext.Provider>
      );
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };