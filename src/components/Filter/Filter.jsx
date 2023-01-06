import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';

export class Filter extends Component  {

handleChangeFilter = (event) => {
    this.props.onFilter(event.currentTarget.value)
    }
    render(){
    return <label className={css.filterLabel}>Find contacts by Name
        <input
            type="text"
            name="filter"
            onChange={this.handleChangeFilter}
            className={css.filterName}
        ></input></label>
    
};
}
Filter.propTypes = {
    onFilter:PropTypes.func,
}