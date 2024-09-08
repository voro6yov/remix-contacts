import { ContactService } from "./application";
import { ContactRepository } from "./infrastructure/repositories";

export const contactService = new ContactService(new ContactRepository());
