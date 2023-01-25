import { useSelector } from 'react-redux';

import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

import ContactListItem from 'components/ContactListItem';
import { StyledList } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContact =
    [
      ...contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      ),
    ] || [];

  return (
    <StyledList>
      {visibleContact.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </StyledList>
  );
};

export default ContactList;
