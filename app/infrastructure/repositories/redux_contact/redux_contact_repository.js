import { ContactFactory } from '../../../domain';
import { contactsDb } from '../contact/contacts_db';
import sortBy from "sort-by";
import { matchSorter } from "match-sorter";
import { createSlice, configureStore } from '@reduxjs/toolkit';
export class ReduxContactRepository {
    contactsSlice;
    store;
    constructor() {
        this.contactsSlice = this.initialize_slice();
        this.store = configureStore({
            reducer: {
                contacts: this.contactsSlice.reducer
            }
        });
    }
    async allContacts(query) {
        await new Promise((resolve) => setTimeout(resolve, 500));
        const records = this.store.getState().contacts;
        let contacts = Object.keys(this.store.getState().contacts)
            .map((key) => records[key])
            .sort(sortBy("-createdAt", "last"));
        if (query) {
            contacts = matchSorter(contacts, query, {
                keys: ["first", "last"],
            });
        }
        return contacts.sort(sortBy("last", "createdAt"));
    }
    async contactOfId(id) {
        return this.store.getState().contacts[id] || null;
    }
    async save(contact) {
        this.store.dispatch(() => { return { type: 'contacts/addContact', payload: contact }; });
    }
    delete(id) {
        this.store.dispatch(() => { return { type: 'contacts/deleteContact', payload: id }; });
    }
    initialize_slice() {
        let records = {};
        for (const contact_info of contactsDb) {
            const contact = ContactFactory.make();
            contact.update_info(contact_info.first, contact_info.last, contact_info.avatar, contact_info.twitter);
            records[contact.id] = contact;
        }
        ;
        const contactsSlice = createSlice({
            name: "contacts",
            initialState: records,
            reducers: {
                addContact(state, action) {
                    let contact = action.payload;
                    state.contacts[contact.id] = contact;
                },
                deleteContact(state, action) {
                    let contacts = { ...state.contacts };
                    delete contacts[action.payload];
                    state.contacts = contacts;
                }
            }
        });
        return contactsSlice;
    }
}
