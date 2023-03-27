import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import * as userService from "../services/userService"
import * as authService from "../services/authService"

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();


    const onLogin = async (email, password) => {
        
        try {

                const token = await authService.login({ email, password })
                if(!token || JSON.stringify(token) === "{}"){
                    throw new Error("Invalid email or password")
                }
             console.log("After token");
                const user = await userService.getOneUser(email)
           console.log(user);
           
                const {_id, username, image, description } = user

              const userImage = image? `http://localhost:7070/${image}` : require("../images/user-profile-image.png")
             
                setAuth({ _id, username, userImage, description, email, token });

            navigate("/")

        } catch (error) {
            console.log(error);
            return error
        }
    };
    const onRegister = async (username, email, password) => {
        try {
            await authService.register({ username, email, password })
        } catch (error) {
            console.log(error);
        }
    };

    const onLogout = async () => {

        setAuth({});
        navigate("/login")
    };

    const contextValues = {
        onLogin,
        onRegister,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userUsername: auth.username,
        userEmail: auth.email,
        userImage: auth.userImage,
        userDescription: auth.description,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};