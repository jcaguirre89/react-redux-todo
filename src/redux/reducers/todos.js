/* Reducer that adds an entry to the todo list or toggles an entry's state between completed or incomplete

todos state has 2 items:
- allIds: an array with all ids
- byIds: an array that holds objects with the data for each entry. its items are:
    - content: string, the text in the note
    - completed: bool, whether the note is complete or incomplete

*/

import { ADD_TODO, TOGGLE_TODO } from '../actionTypes';

const initialState = {
    allIds: [],
    byIds: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO: {
            const {id, content } = action.payload;
            return {
                ...state,
                //Add new ID to the end of the list
                allIds: [...state.allIds, id],
                // Add the full entry (content) to the byIds array
                byIds: {
                    ...state.byIds,
                    [id]: {
                        content,
                        completed: false
                    }
                }
            };
        }
        case TOGGLE_TODO: {
            const { id } = action.payload;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        ...state.byIds[id],
                        completed: !state.byIds[id].completed
                    }
                }
            }
        }
        default:
            return state;
        }
    }
    
