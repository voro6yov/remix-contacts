import { redirect } from "@remix-run/node";
import invariant from "tiny-invariant";
import { contactService } from "../entrypoint";
export const action = async ({ params, }) => {
    invariant(params.contactId, "Missing contactId param");
    await contactService.destroy(params.contactId);
    return redirect("/");
};
