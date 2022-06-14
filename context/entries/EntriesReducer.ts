import { EntriesState } from '.';
import { Entry } from '../../interfaces';

type EntriesActionType = 
    | { type: 'ADD_ENTRY', payload: Entry }
    | { type: 'UPDATE_ENTRY', payload: Entry }

export const EntriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
    switch (action.type) {
        case 'ADD_ENTRY':
            return {
               ...state,
                entries: [...state.entries, action.payload]
            };

        case 'UPDATE_ENTRY':
            return {
               ...state,
                entries: [...state.entries.map(entry => {
                    if (entry._id === action.payload._id) {
                       entry.status = action.payload.status;
                       entry.description = action.payload.description;
                    }
                    return entry;
                })]
            };

        default:
            return state;
    }
};