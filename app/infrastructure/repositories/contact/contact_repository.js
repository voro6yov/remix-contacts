import { ContactFactory } from '../../../domain';
import { contactsDb } from './contacts_db';
import sortBy from "sort-by";
import { matchSorter } from "match-sorter";
export class ContactRepository {
    records = {};
    constructor() {
        for (const contact_info of contactsDb) {
            const contact = ContactFactory.make();
            contact.update_info(contact_info.first, contact_info.last, contact_info.avatar, contact_info.twitter);
            this.records[contact.id] = contact;
        }
        ;
    }
    async allContacts(query) {
        await new Promise((resolve) => setTimeout(resolve, 500));
        let contacts = Object.keys(this.records)
            .map((key) => this.records[key])
            .sort(sortBy("-createdAt", "last"));
        if (query) {
            contacts = matchSorter(contacts, query, {
                keys: ["first", "last"],
            });
        }
        return contacts.sort(sortBy("last", "createdAt"));
    }
    async contactOfId(id) {
        return this.records[id] || null;
    }
    async save(contact) {
        this.records[contact.id] = contact;
    }
    delete(id) {
        delete this.records[id];
    }
}
