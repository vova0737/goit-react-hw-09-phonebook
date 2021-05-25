import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Filter.module.css';
import * as phonebookActions from '../../redux/phonebook/phonebook-actions';
import selectors from '../../redux/phonebook/phonebook-selectors';


export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(selectors.getFilter);
  // const contacts = useSelector(selectors.getAllContacts);
  const onChangeFilter = e =>
    dispatch(phonebookActions.changeFilter(e.target.value));

  return (
    <form className={styles.form}>
        <label>
          <span className={styles.title}>Search by name</span>
          <input
            className={styles.input}
            type="text"
            value={value}
            onChange={onChangeFilter}
          />
        </label>
      </form>
  );
}
