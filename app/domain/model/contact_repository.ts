import { Contact } from "./contact";


export interface IContactRepository {
    allContacts(query?: string | null): Promise<Contact[]>;
    contactOfId(id: string): Promise<Contact | null>;
    save(contact: Contact): Promise<void>;
    delete(id: string): void;
}