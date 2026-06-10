import { Router } from "express";
import * as destinationController from "./destination.controller";

const router = Router();

router
  .route("/")
  .get(destinationController.getDestinations)
  .post(destinationController.createDestination);

router
  .route("/:id")
  .patch(destinationController.updateDestination)
  .delete(destinationController.deleteDestination);

export default router;
