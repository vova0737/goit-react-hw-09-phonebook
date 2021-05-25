import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../Components/Container/Container';
import ContactForm from '../Components/ContactForm/ContactForm';
import Filter from '../Components/Filter/Filter';
import ContactList from '../Components/ContactList/ContactList';
import operations from '../redux/phonebook/phonebook-operations';

export default function PhonebookView() {
  // const contacts = useSelector(selectors.getAllContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      {/* <Title /> */}
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
}
