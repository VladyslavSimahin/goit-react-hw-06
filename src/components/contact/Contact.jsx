import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";
export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={css.box}>
      <div className={css.card}>
        <p>{name}</p>
        <p>{number}</p>
      </div>

      <button className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
