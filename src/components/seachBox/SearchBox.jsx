import css from "./SeachBox.module.css";
export const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.searchdiv}>
      <p className={css.searchtext}>Find contacts by name</p>
      <input
        className={css.searchbar}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};
