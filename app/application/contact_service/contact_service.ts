import invariant from "tiny-invariant";
import { IContactRepository, Contact, ContactFactory } from "../../domain";
import type { ContactInfo } from "./contact_info";

export class ContactService {
    private contactRepository: IContactRepository;

    constructor(contactRepository: IContactRepository) {
        this.contactRepository = contactRepository;
    }

    async getAll(query?: string | null): Promise<Contact[]> {
        return await this.contactRepository.allContacts(query);
    }

    async get(id: string): Promise<Contact | null> {
        return await this.contactRepository.contactOfId(id);
    }

    async create(): Promise<Contact> {
        const contact = ContactFactory.make();
        await this.contactRepository.save(contact);
        return contact;
    }

    async set(id: string, values: ContactInfo): Promise<Contact> {
        let contact: Contact | null = await this.contactRepository.contactOfId(id);
        invariant(contact !== null, `Contact with id ${id} not found`);
        
        contact.update_info(
            values.first,
            values.last,
            values.avatar,
            values.twitter,
            values.notes,
        );
        
        await this.contactRepository.save(contact);

        return contact;
    }

    async mark(id: string, favorite: boolean): Promise<Contact> {
        let contact: Contact | null = await this.contactRepository.contactOfId(id);
        invariant(contact !== null, `Contact with id ${id} not found`);
        if (favorite) {
            contact.markAsFavorite();
        } else {
            contact.markAsNotFavorite();
        }
        
        await this.contactRepository.save(contact);

        return contact;
    }

    destroy(id: string): void {
        this.contactRepository.delete(id);
    }
}