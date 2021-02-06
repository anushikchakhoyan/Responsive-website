import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import LoadingIndicator from "../LoadingIndicator";
import PublicRoute from "../PublicRoute";

const NotFoundContainer = lazy(() => import('../../containers/NotFound'));
const HomeContainer = lazy(() => import('../../containers/Home'));

const Routes = ({ t }) => (
        <Switch>
            <PublicRoute exact path="/">
                <Suspense fallback={<LoadingIndicator />}>
                    <HomeContainer />
                </Suspense>
            </PublicRoute>
            <Route exact path="*">
                <Suspense fallback={<LoadingIndicator />}>
                    <NotFoundContainer />
                </Suspense>
            </Route>
        </Switch>
);

export default Routes;
