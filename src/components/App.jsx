import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getContacts } from 'redux/contactsSlice.js';

import { AppTitle, ContactsTitle, Container } from './App.styled.js';
import InputForm from 'components/InputForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <AppTitle>Phonebook</AppTitle>
      <InputForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      {!!contacts && <ContactList />}
      <ToastContainer />
    </Container>
  );
};

export default App;
