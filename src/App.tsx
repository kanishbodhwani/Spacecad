import React, { useEffect, useCallback, useState , lazy, Suspense} from 'react';
import {useAppDispatch, useAppSelector} from "./app/hooks";
import './styles/App.css';
import * as ROUTES from "./constants/routes";
import { setUser } from "./features/user/user-slice";
import { Routes, Route, createBrowserRouter, createRoutesFromElements, BrowserRouter as Router} from 'react-router-dom';

const Dashboard = lazy(() => import("./pages/dashboard"));
const Login = lazy(() => import("./pages/login"));
const Signup = lazy(() => import("./pages/signup"));
const NotFound = lazy(() => import("./pages/not-found"));

export default function App() {
  // const [userData, ] = useState(user);

  const value = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  // const callback = useCallback(
  //   () => dispatch(setUser(userData)), 
  //   [dispatch, userData]
  // )

  // const clickHandler = () => {
  //   callback();
  // }

  // useEffect(() => {
  //   // dispatch(setUser(userData))
  // }, [dispatch, userData]);


  const AppRoutes = () => {
    return (
      <Suspense fallback={<p> Loading.. </p>}>
        <Routes>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />}/>
          <Route path={ROUTES.SIGNUP} element={<Signup />}/>
          <Route path={ROUTES.LOGIN} element={<Login />}/>
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />}/>
        </Routes>        
      </Suspense>
    )
  }

  return (
    <div className="App">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

