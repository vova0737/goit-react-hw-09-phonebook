import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

/**
 * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /contacts
 * - В противном случае рендерит компонент
 */

export default function PublicRoute({ children, redirectTo, ...routeProps }) {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <Route {...routeProps}>
      {isAuthenticated && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
}