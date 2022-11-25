import { Router } from "express";
import {
  addStockToUser,
  deleteStockFromUser,
  getUserStocks,
  login,
} from "./../controller/user.controller";

const router = Router();

router.post("/login", login);
router.post("/add-stock", addStockToUser);
router.get("/get-stocks/:id", getUserStocks);
router.put("/delete-stock", deleteStockFromUser);

export default router;
