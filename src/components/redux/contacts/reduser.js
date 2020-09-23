import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const initialState = {
  contacts: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermion Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: [],
  },
};

export const phonebookReducer = createReducer(initialState, {
  [actions.addMyContact]: (state, { payload }) => ({
    ...state,
    contacts: {
      ...state.contacts,
      items: [...state.contacts.items, payload],
    },
  }),

  [actions.delMyContact]: (state, { payload }) => ({
    ...state,
    contacts: {
      ...state.contacts,
      items: state.contacts.items.filter(contact => contact.id !== payload),
      filter: state.contacts.filter.filter(contact => contact.id !== payload),
    },
  }),

  [actions.setLocalStorege]: (state, { payload }) => ({
    ...state,
    contacts: {
      ...state.contacts,
      items: [...payload],
    },
  }),

  [actions.filteredItems]: (state, { payload }) => ({
    ...state,
    contacts: {
      ...state.contacts,
      filter: [...payload],
    },
  }),
});
