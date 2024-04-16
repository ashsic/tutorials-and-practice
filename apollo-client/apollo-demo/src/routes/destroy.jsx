import { deleteContact } from "../contacts";
import { redirect } from "react-router-dom";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await deleteContact(params.contactId, updates);
  return redirect(`/`);
}
