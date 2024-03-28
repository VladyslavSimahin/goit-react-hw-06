import { ContactForm } from "./contactForm/ContactForm";
import { ContactList } from "./contactList/ContactList";
import { SearchBox } from "./seachBox/SearchBox";
import { useSelector } from "react-redux";
import slice from "../redux/contactsSlice";
export const App = () => {
  const contacts = useSelector(slice);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {contacts.length ? <ContactList /> : <p>No contacts yet</p>}
    </div>
  );
};
