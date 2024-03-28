import { useSelector } from "react-redux";
import { Contact } from "../contact/Contact";
import css from "./ContactList.module.css";
import slice from "../../redux/contactsSlice";
import { selectFilterName } from "../../redux/filtersSlice";

export const ContactList = () => {
  const contacts = useSelector(slice);
  const filterValue = useSelector(selectFilterName);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );
  return (
    <ul className={css.lists}>
      {filteredContacts.map((item) => (
        <li key={item.id} className={css.list}>
          <Contact name={item.name} number={item.number} id={item.id} />
        </li>
      ))}
    </ul>
  );
};
