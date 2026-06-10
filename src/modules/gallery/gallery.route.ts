import { Router } from "express";
import * as galleryController from "./gallery.controller";

const router = Router();

router
  .route("/")
  .get(galleryController.getGalleries)
  .post(galleryController.createGallery);

router
  .route("/:id")
  .patch(galleryController.updateGallery)
  .delete(galleryController.deleteGallery);

export default router;