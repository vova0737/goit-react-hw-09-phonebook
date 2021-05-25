import React, { useCallback } from 'react';
import styles from './UserMenu.module.css';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import avatar from './default-avatar.png';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  const onLogout = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <img src={avatar} alt="" width="36" className={styles.avatar} />
      <span className={styles.name}>Welcome, {name}</span>
      <button className={styles.button} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}