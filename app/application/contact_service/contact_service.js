import invariant from "tiny-invariant";
import { ContactFactory } from "../../domain";
export class ContactService {
    contactRepository;
    constructor(contactRepository) {
        this.contactRepository = contactRepository;
    }
    async getAll(query) {
        return await this.contactRepository.allContacts(query);
    }
    async get(id) {
        return await this.contactRepository.contactOfId(id);
    }
    async create() {
        const contact = ContactFactory.make();
        await this.contactRepository.save(contact);
        return contact;
    }
    async set(id, values) {
        let contact = await this.contactRepository.contactOfId(id);
        invariant(contact !== null, `Contact with id ${id} not found`);
        contact.update_info(values.first, values.last, values.avatar, values.twitter, values.notes);
        await this.contactRepository.save(contact);
        return contact;
    }
    async mark(id, favorite) {
        let contact = await this.contactRepository.contactOfId(id);
        invariant(contact !== null, `Contact with id ${id} not found`);
        if (favorite) {
            contact.markAsFavorite();
        }
        else {
            contact.markAsNotFavorite();
        }
        await this.contactRepository.save(contact);
        return contact;
    }
    destroy(id) {
        this.contactRepository.delete(id);
    }
}
