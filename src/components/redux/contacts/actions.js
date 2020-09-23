import { createAction } from '@reduxjs/toolkit';

export const addMyContact = createAction('phonebook/addMyContact');
export const delMyContact = createAction('phonebook/delMyContact');
export const filteredItems = createAction('phonebook/filteredItems');
export const setLocalStorege = createAction('phonebook/setLocalStorege');

export default { addMyContact, delMyContact, filteredItems, setLocalStorege };
