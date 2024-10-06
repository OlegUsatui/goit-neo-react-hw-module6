import Contact from '../Contact/Contact.jsx';
import styles from './ContactList.module.css';
import {useSelector} from "react-redux";
import {selectContacts} from "../../redux/selectors.js";

const ContactList = () => {
  const list = useSelector(selectContacts)

  return (
    <ul className={styles.contactList}>
      {list.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
