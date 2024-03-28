import { useDispatch, useSelector } from "react-redux";
import css from "./SeachBox.module.css";
import { selectFilterName, setFilterName } from "../../redux/filtersSlice";

export function SearchBox() {
  const filterValue = useSelector(selectFilterName);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    const filter = e.target.value;
    dispatch(setFilterName(filter));
  };

  return (
    <div className={css.searchDiv}>
      <p className={css.searchText}>Find contacts by name</p>
      <input
        className={css.searchBar}
        type="text"
        value={filterValue}
        onChange={handleFilterChange}
        autoComplete="off"
      />
    </div>
  );
}
