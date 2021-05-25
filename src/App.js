import React, { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import AppBar from './Components/AppBar';
import { useDispatch } from 'react-redux';
import Container from './Components/Container/Container';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const PhonebookView = lazy(() => import('./views/PhonebookView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Suspense fallback={<p>Загружаем...</p>}>
        <Switch>
          <PublicRoute exact path="/" restricted redirectTo="/contacts">
            <HomeView />
          </PublicRoute>
          <PublicRoute path="/register" restricted redirectTo="/contacts">
            <RegisterView />
          </PublicRoute>
          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <PhonebookView />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Container>
  );
}
