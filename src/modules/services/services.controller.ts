import httpStatus from "http-status";
import { AppError } from "../../utils/AppError";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import * as serviceProvideService from "./services.service";

export const createService = catchAsync(async (req, res) => {
  const payload = req.body;

  const service = await serviceProvideService.createService(payload);

  return sendResponse(res, {
    statusCode: httpStatus.CREATED,
    status: httpStatus[httpStatus.CREATED],
    message: "Service created successfully!",
    data: service,
  });
});

export const getServices = catchAsync(async (req, res) => {
  const services = await serviceProvideService.getServices();

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    status: httpStatus[httpStatus.OK],
    message: "Services retrieved successfully!",
    data: services,
  });
});

export const updateService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;

  const service = await serviceProvideService.updateService(
    id as string,
    payload,
  );

  if (service.modifiedCount === 0) {
    throw new AppError(httpStatus.NOT_FOUND, "Service not found!");
  }

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    status: httpStatus[httpStatus.OK],
    message: "Service updated successfully!",
    data: service,
  });
});

export const deleteService = catchAsync(async (req, res) => {
  const { id } = req.params;

  const service = await serviceProvideService.deleteService(
    id as string,
  );

  if (service.deletedCount === 0) {
    throw new AppError(httpStatus.NOT_FOUND, "Service not found!");
  }

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    status: httpStatus[httpStatus.OK],
    message: "Service deleted successfully!",
    data: service,
  });
});
