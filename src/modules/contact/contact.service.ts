import { IContact } from "./contact.interface";
import Contact from "./contact.model";

export const createContact = async (
  contactData: IContact,
) => {
  const contact = await Contact.create(contactData);

  return contact;
};

export const getContacts = async () => {
  const contacts = await Contact.find({});

  return contacts;
};

export const updateContact = async (
  id: string,
  payload: Partial<IContact>,
) => {
  const contact = await Contact.updateOne(
    { _id: id },
    { $set: payload },
  );

  return contact;
};

export const deleteContact = async (id: string) => {
  const contact = await Contact.deleteOne({
    _id: id,
  });

  return contact;
};