import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getContacts, getFilter } from 'redux/selectors.js';
import { setFilter } from 'redux/filterSlice.js';

import { AppTitle, ContactsTitle, Container } from './App.styled.js';
import InputForm from 'components/InputForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const handlerInputChange = evt => {
    const { value } = evt.target;
    setFilter(value);
  };

  const getVisibleContacts = () => {
    return [
      ...contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      ),
    ];
  };

  return (
    <Container>
      <AppTitle>Phonebook</AppTitle>
      <InputForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter onChange={handlerInputChange} />
      {!!contacts && (
        <ContactList contacts={getVisibleContacts()}></ContactList>
      )}
      <ToastContainer />
    </Container>
  );
};

export default App;
