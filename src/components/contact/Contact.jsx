import css from "./Contact.module.css";
export const Contact = ({ name, number, onDelete, id }) => {
  return (
    <div className={css.box}>
      <div className={css.card}>
        <p>{name}</p>
        <p>{number}</p>
      </div>

      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};
