import { Contact } from "../contact/Contact";
import css from "./ContactList.module.css";

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.lists}>
      {contacts.map((contact) => (
        <li key={contact.id} className={css.list}>
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
};
