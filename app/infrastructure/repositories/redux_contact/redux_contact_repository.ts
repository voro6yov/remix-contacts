import { IContactRepository, ContactFactory, Contact } from '../../../domain';
import { contactsDb } from '../contact/contacts_db';
import sortBy from "sort-by";
import { matchSorter } from "match-sorter";
import { ContactsState } from './contacts_state';
import { createSlice, PayloadAction, configureStore } from '@reduxjs/toolkit';


export class ReduxContactRepository implements IContactRepository {
    contactsSlice: any;
    store: any;

    constructor() {
        this.contactsSlice = this.initialize_slice()
        this.store = configureStore(
            {
                reducer: {
                    contacts: this.contactsSlice.reducer
                }
            }
        )
    }

    async allContacts(query?: string | null): Promise<Contact[]> {
        await new Promise((resolve) => setTimeout(resolve, 500));

        const records = this.store.getState().contacts

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

    async contactOfId(id: string): Promise<Contact | null> {
        return this.store.getState().contacts[id] || null;
    }

    async save(contact: Contact): Promise<void> {
        this.store.dispatch(() => {return { type: 'contacts/addContact', payload: contact }});
    }

    delete(id: string): void {
        this.store.dispatch(() => {return { type: 'contacts/deleteContact', payload: id }});
    }

    private initialize_slice() {
        let records = {} as Record<string, Contact>;
        for (const contact_info of contactsDb) {
            const contact = ContactFactory.make();
            contact.update_info(
                contact_info.first,
                contact_info.last,
                contact_info.avatar,
                contact_info.twitter,
            );
            records[contact.id] = contact;
        };

        const contactsSlice = createSlice(
            {
                name: "contacts",
                initialState: records as ContactsState,
                reducers: {
                    addContact(state: any, action: PayloadAction<Contact>) {
                        let contact = action.payload
                        state.contacts[contact.id] = contact
                    },
                    deleteContact(state: any, action: PayloadAction<string>) {
                        let contacts = { ...state.contacts };
                        delete contacts[action.payload];
                        state.contacts = contacts;
                    }
                }
            }
        )
        return contactsSlice
    }
}