/*
This component reads from the store which visibility filter (all, complete, incomplete) is currently active, and 
filter the todo list accordingly (by dispatching an action to the store) when buttons are clicked to filter
When this action is dispatched, the TodoList component will update by reading the updated list from the store.

*/

import React from 'react';

import { connect } from 'react-redux';
import { setFilter } from '../redux/actions'

import cx from 'classnames';

import { VISIBILITY_FILTERS } from '../constants';

const VisibilityFilters = ({ activeFilter, setFilter}) => {
    return (
        <div className='visibility-filters'>
        {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
            const currentFilter = VISIBILITY_FILTERS[filterKey];
            return (
                <span 
                key={`visibility-filter-${currentFilter}`}
                className={cx(
                    "filter",
                    currentFilter === activeFilter && 'filter--active'
                )}
                onClick={() => {
                    setFilter(currentFilter);
                }}
                >
                    {currentFilter}
                </span>
            )
        })}
        </div>
    );
};

const mapStateToProps = state => {
    return { activeFilter: state.visibilityFilter };
};

export default connect(
    mapStateToProps,
    { setFilter }
)(VisibilityFilters);