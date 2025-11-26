import { Router } from "express";
import { ClientController } from "../controllers/client.controller";

const router = Router();
const controller = new ClientController();

router.post("/", controller.create);
router.get("/", controller.list);
router.get("/:id", controller.get);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;