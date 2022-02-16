import {Switch, Route, Redirect} from 'react-router-dom';
import {privateRoutes, publicRoutes} from "../router";

const AppRouter = () => {
    let isAuth = true
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
                <Redirect to="/error"/>
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
