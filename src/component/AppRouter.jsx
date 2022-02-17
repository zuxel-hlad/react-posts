import {Switch, Route, Redirect} from 'react-router-dom';
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context/context";
import {useContext} from "react";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
    const {isAuth, loading} = useContext(AuthContext);

    if (loading) {
        return <Loader/>
    }
    return (
        isAuth ?
            <Switch>
                {privateRoutes.map(route =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={Date.now()}
                    />
                )}
                <Redirect to="/posts"/>
            </Switch> :
            <Switch>
                {publicRoutes.map(route =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={Date.now()}
                    />
                )}
                <Redirect to="/login"/>
            </Switch>
    );
};

export default AppRouter;
