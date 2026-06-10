import { Router } from "express";
import * as contactController from "./contact.controller";

const router = Router();

router
  .route("/")
  .get(contactController.getContacts)
  .post(contactController.createContact);

router
  .route("/:id")
  .patch(contactController.updateContact)
  .delete(contactController.deleteContact);

export default router;