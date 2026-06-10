import httpStatus from "http-status";
import { AppError } from "../../utils/AppError";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import * as galleryService from "./gallery.service";

export const createGallery = catchAsync(async (req, res) => {
  const payload = req.body;

  const gallery = await galleryService.createGallery(payload);

  return sendResponse(res, {
    statusCode: httpStatus.CREATED,
    status: httpStatus[httpStatus.CREATED],
    message: "Gallery created successfully!",
    data: gallery,
  });
});

export const getGalleries = catchAsync(async (req, res) => {
  const galleries = await galleryService.getGalleries();

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    status: httpStatus[httpStatus.OK],
    message: "Galleries retrieved successfully!",
    data: galleries,
  });
});

export const updateGallery = catchAsync(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;

  const gallery = await galleryService.updateGallery(
    id as string,
    payload,
  );

  if (gallery.modifiedCount === 0) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Gallery not found!",
    );
  }

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    status: httpStatus[httpStatus.OK],
    message: "Gallery updated successfully!",
    data: gallery,
  });
});

export const deleteGallery = catchAsync(async (req, res) => {
  const { id } = req.params;

  const gallery = await galleryService.deleteGallery(
    id as string,
  );

  if (gallery.deletedCount === 0) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Gallery not found!",
    );
  }

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    status: httpStatus[httpStatus.OK],
    message: "Gallery deleted successfully!",
    data: gallery,
  });
});