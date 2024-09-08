import { Contact } from './contact';
export class ContactFactory {
    static make() {
        return new Contact(Math.random().toString(36).substring(2, 9));
    }
}
