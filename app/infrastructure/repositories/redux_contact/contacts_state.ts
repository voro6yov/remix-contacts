import { Contact } from "../../../domain";


export interface ContactsState {
    [id: string]: Contact;
}