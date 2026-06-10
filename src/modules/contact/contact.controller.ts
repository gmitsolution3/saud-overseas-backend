import httpStatus from "http-status";
import { AppError } from "../../utils/AppError";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import * as contactService from "./contact.service";

export const createContact = catchAsync(async (req, res) => {
  const payload = req.body;

  const contact = await contactService.createContact(payload);

  return sendResponse(res, {
    statusCode: httpStatus.CREATED,
    status: httpStatus[httpStatus.CREATED],
    message: "Contact created successfully!",
    data: contact,
  });
});

export const getContacts = catchAsync(async (req, res) => {
  const contacts = await contactService.getContacts();

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    status: httpStatus[httpStatus.OK],
    message: "Contacts retrieved successfully!",
    data: contacts,
  });
});

export const updateContact = catchAsync(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;

  const contact = await contactService.updateContact(
    id as string,
    payload,
  );

  if (contact.modifiedCount === 0) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Contact not found!",
    );
  }

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    status: httpStatus[httpStatus.OK],
    message: "Contact updated successfully!",
    data: contact,
  });
});

export const deleteContact = catchAsync(async (req, res) => {
  const { id } = req.params;

  const contact = await contactService.deleteContact(
    id as string,
  );

  if (contact.deletedCount === 0) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Contact not found!",
    );
  }

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    status: httpStatus[httpStatus.OK],
    message: "Contact deleted successfully!",
    data: contact,
  });
});