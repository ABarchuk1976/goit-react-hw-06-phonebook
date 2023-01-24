import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contactsSlice.js';
import PropTypes from 'prop-types';
import {
  ItemWrapper,
  ItemContact,
  ItemDeleteBtn,
} from './ContactListItem.styled.js';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleContactDelete = id => dispatch(deleteContact(id));

  return (
    <li>
      <ItemWrapper>
        <ItemContact>
          {name}: {number}
        </ItemContact>
        <ItemDeleteBtn type="button" onClick={() => handleContactDelete(id)}>
          Delete
        </ItemDeleteBtn>
      </ItemWrapper>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
