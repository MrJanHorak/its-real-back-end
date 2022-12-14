import { Router } from "express";
import * as postCtrl from "../controllers/posts.js";
import { checkAuth, decodeUserFromToken } from "../middleware/auth.js";

const router = Router();

/* -------- Publice Routes -------- */
router.get("/", postCtrl.index);
router.get("/:id", postCtrl.show);

/* -------- Protected Routes -------- */
router.use(decodeUserFromToken);
router.post("/", checkAuth, postCtrl.create);
router.put("/:id", checkAuth, postCtrl.update);
router.delete("/:id", checkAuth, postCtrl.delete);
