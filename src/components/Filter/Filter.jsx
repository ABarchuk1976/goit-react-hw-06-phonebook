import { useSelector, useDispatch } from 'react-redux';

import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import { FilterLabel, FilterInput } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handlerFilterChange = evt => {
    console.log(evt?.target?.value);
    dispatch(setFilter(evt?.target?.value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        title="Filter is case unsensitive."
        value={filter}
        onChange={handlerFilterChange}
        required
      />
    </FilterLabel>
  );
};

export default Filter;
