import { Router } from "express";
import * as servicesController from "./services.controller";

const router = Router();

router
  .route("/")
  .get(servicesController.getServices)
  .post(servicesController.createService);

router
  .route("/:id")
  .patch(servicesController.updateService)
  .delete(servicesController.deleteService);

export default router;
