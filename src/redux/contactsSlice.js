import {createSlice, nanoid} from '@reduxjs/toolkit';

const loadFromLocalStorage = () => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
};

import initialContacts from '../contacts.json';

const slice = createSlice({
    name: 'contacts',
    initialState: {
        items: loadFromLocalStorage().length > 0 ? loadFromLocalStorage() : initialContacts,
    },
    reducers: {
        addContact: {
            reducer(state, action) {
                state.items.push(action.payload);
            },
            prepare(contact) {
                return {
                    payload: {
                        ...contact,
                        id: nanoid(),
                    },
                };
            },
        },
        deleteContact: (state, action) => {
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload),
            };
        },
    },
});

export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;