import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import LoadingIndicator from "../LoadingIndicator";
import PublicRoute from "../PublicRoute";

const NotFoundContainer = lazy(() => import('../../containers/NotFound'));
const Subscription = lazy(() => import('../../containers/Subscription'));
const Favorites = lazy(() => import('../../containers/Favorites'));
const ContactUs = lazy(() => import('../../containers/ContactUs'));
const Home = lazy(() => import('../../containers/Home'));

const Routes = () => (
        <Switch>
            <PublicRoute exact path="/">
                <Suspense fallback={<LoadingIndicator />}>
                    <Home />
                </Suspense>
            </PublicRoute>
            <PublicRoute path="/favorites">
                <Suspense fallback={<LoadingIndicator />}>
                    <Favorites />
                </Suspense>
            </PublicRoute>
            <PublicRoute path="/contact-us">
                <Suspense fallback={<LoadingIndicator />}>
                    <ContactUs />
                </Suspense>
            </PublicRoute>
            <PublicRoute path="/subscribe">
                <Suspense fallback={<LoadingIndicator />}>
                    <Subscription />
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
