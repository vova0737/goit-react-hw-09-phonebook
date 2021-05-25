import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ContactList.module.css';
import operations from '../../redux/phonebook/phonebook-operations';
import selectors from '../../redux/phonebook/phonebook-selectors';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.getFilteredContactsList);
  const onDelete = id => dispatch(operations.deleteContact(id));

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.contact}>
            <span className={styles.name}>{name}</span>
            <span className={styles.number}>{number}</span>
            <button
              className={styles.btn}
              onClick={() => {
                onDelete(id);
              }}
              aria-label="Удалить контакт"
            >
              Delete
            </button>
          </li>
      ))}
    </ul>
  );
}
