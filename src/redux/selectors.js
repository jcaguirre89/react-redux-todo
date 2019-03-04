// A type of SELECTS to the redux store.
// Functions that do transformations/filtering to the data being pulled/pushed to/from the store
// used as an abstraction for the mapStatetoProps

import { VISIBILITY_FILTERS } from "../constants";

//Get entire todos object from store (todos has 2 keys: allIds and byIds)
export const getTodoState = store => store.todos
//Get list of ids
export const getTodoList = store => 
    getTodoState(store) ? getTodoState(store).allIds : [];
// Get a single todo entry (with all its data)
export const getTodoById = (store, id) => 
    getTodoState(store) ? { ...getTodoState(store).byIds[id], id } : {};
// Get all entries as an array of objects
export const getTodos = store => 
    getTodoList(store).map(id => getTodoById(store, id));
// Get entries filtering by visibility filter
export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
    const allTodos = getTodos(store);
    switch (visibilityFilter) {
        case VISIBILITY_FILTERS.COMPLETED:
            return allTodos.filter(todo => todo.completed);
        case VISIBILITY_FILTERS.INCOMPLETE:
            return allTodos.filter(todo => !todo.completed);
        case VISIBILITY_FILTERS.ALL:
        default:
        return allTodos;
    }
};

