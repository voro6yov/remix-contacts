import { IContactRepository, ContactFactory, Contact } from '../../../domain';
import { contactsDb } from './contacts_db';
import sortBy from "sort-by";
import { matchSorter } from "match-sorter";


export class ContactRepository implements IContactRepository {
    records: Record<string, Contact> = {};

    constructor() {
        for (const contact_info of contactsDb) {
            const contact = ContactFactory.make();
            contact.update_info(
                contact_info.first,
                contact_info.last,
                contact_info.avatar,
                contact_info.twitter,
            );
            this.records[contact.id] = contact;
        };
    }

    async allContacts(query?: string | null): Promise<Contact[]> {
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

    async contactOfId(id: string): Promise<Contact | null> {
        return this.records[id] || null;
    }

    async save(contact: Contact): Promise<void> {
        this.records[contact.id] = contact;
    }

    delete(id: string): void {
        delete this.records[id];
    }
}