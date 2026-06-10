import { Router } from "express";
import defaultController from "../modules/default/default.controller";
import servicesRoute from "../modules/services/services.route";
import destinationRoute from "../modules/destination/destination.route";

const router = Router();

router.get("/", defaultController);
router.use("/services", servicesRoute);
router.use("/destinations", destinationRoute);

export default router;
