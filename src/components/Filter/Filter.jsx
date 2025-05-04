import { useDispatch, useSelector } from 'react-redux';
import style from './Filter.module.css';
import { selectFilter, setFilter } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <input
      className={style.input}
      placeholder="Find it"
      name="filter"
      value={filter}
      onChange={handleFilter}
    />
  );
};

export default Filter;
