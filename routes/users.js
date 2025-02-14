import express from "express";
import { getUsers, saveUser } from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/save-user", saveUser);
export default router;
