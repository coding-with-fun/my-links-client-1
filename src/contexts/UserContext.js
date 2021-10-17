import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [isUserAuthenticated, setIsUserAuthenticated] = useState();

    const handleUserAuthentication = (token) => {
        if (token) {
            localStorage.setItem("ftc-userToken", token);
            setIsUserAuthenticated(true);
        } else {
            localStorage.removeItem("ftc-userToken");
            setIsUserAuthenticated(false);
        }
    };

    return (
        <UserContext.Provider
            value={{
                isUserAuthenticated,

                handleUserAuthentication,
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};
