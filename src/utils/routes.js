import React, { useContext, useEffect } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import AuthPage from "../screens/AuthPage";
import Home from "../screens/Home";
import PageNotFound from "../screens/PageNotFound";

const WrappedRouter = () => {
    const { isUserAuthenticated, handleUserAuthentication } =
        useContext(UserContext);
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem("my-userToken");
        handleUserAuthentication(token);

        // eslint-disable-next-line
    }, [location]);

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/page-not-found" component={PageNotFound} />

            {/* Unauthenticated Routes */}
            <Route exact path="/signin">
                {isUserAuthenticated ? (
                    <Redirect to="/page-not-found" />
                ) : (
                    <AuthPage />
                )}
            </Route>

            <Redirect to="/page-not-found" />
        </Switch>
    );
};

export default WrappedRouter;
