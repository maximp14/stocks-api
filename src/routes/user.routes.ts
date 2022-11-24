import { Router } from "express";
import {
  addStockToUser,
  getUserStocks,
  login,
} from "./../controller/user.controller";

const router = Router();

router.post("/login", login);
router.post("/add-stock", addStockToUser);
router.get("/get-stocks/:id", getUserStocks);

export default router;
