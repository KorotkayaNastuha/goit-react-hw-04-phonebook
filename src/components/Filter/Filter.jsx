
import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';

export function Filter ({onFilter})  {

const handleChangeFilter = (event) => {
    onFilter(event.currentTarget.value)
    }
    
    return <label className={css.filterLabel}>Find contacts by Name
        <input
            type="text"
            name="filter"
            onChange={handleChangeFilter}
            className={css.filterName}
        ></input></label>
    
};

Filter.propTypes = {
    onFilter:PropTypes.func,
}