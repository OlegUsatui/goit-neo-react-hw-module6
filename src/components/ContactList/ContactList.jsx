import Contact from '../Contact/Contact.jsx';
import styles from './ContactList.module.css';
import {useSelector} from "react-redux";
import {selectContacts} from "../../redux/selectors.js";

const ContactList = () => {
  const list = useSelector(selectContacts)
  const filter = useSelector((state) => state.filters.name);

  const filteredContacts = list.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
