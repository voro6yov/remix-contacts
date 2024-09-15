import { ContactService } from "./application";
import { ReduxContactRepository } from "./infrastructure/repositories";

export const contactService = new ContactService(new ReduxContactRepository());
