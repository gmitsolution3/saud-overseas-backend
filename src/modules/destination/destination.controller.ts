import httpStatus from "http-status";
import { AppError } from "../../utils/AppError";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import * as destinationService from "./destination.service";

export const createDestination = catchAsync(async (req, res) => {
  const payload = req.body;

  const destination =
    await destinationService.createDestination(payload);

  return sendResponse(res, {
    statusCode: httpStatus.CREATED,
    status: httpStatus[httpStatus.CREATED],
    message: "Destination created successfully!",
    data: destination,
  });
});

export const getDestinations = catchAsync(async (req, res) => {
  const destinations =
    await destinationService.getDestinations();

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    status: httpStatus[httpStatus.OK],
    message: "Destinations retrieved successfully!",
    data: destinations,
  });
});

export const updateDestination = catchAsync(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;

  const destination =
    await destinationService.updateDestination(
      id as string,
      payload,
    );

  if (destination.modifiedCount === 0) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Destination not found!",
    );
  }

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    status: httpStatus[httpStatus.OK],
    message: "Destination updated successfully!",
    data: destination,
  });
});

export const deleteDestination = catchAsync(async (req, res) => {
  const { id } = req.params;

  const destination =
    await destinationService.deleteDestination(
      id as string,
    );

  if (destination.deletedCount === 0) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Destination not found!",
    );
  }

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    status: httpStatus[httpStatus.OK],
    message: "Destination deleted successfully!",
    data: destination,
  });
});