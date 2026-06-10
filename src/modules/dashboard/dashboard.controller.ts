import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import * as dashboardService from "./dashboard.service";

export const getDashboard = catchAsync(async (req, res) => {
  const dashboardData =
    await dashboardService.getDashboard();

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    status: httpStatus[httpStatus.OK],
    message: "Dashboard data retrieved successfully!",
    data: dashboardData,
  });
});