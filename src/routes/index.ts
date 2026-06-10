import { Router } from "express";
import defaultController from "../modules/default/default.controller";
import servicesRoute from "../modules/services/services.route";


const router = Router();

router.get("/", defaultController);
router.use("/services", servicesRoute);

export default router;
