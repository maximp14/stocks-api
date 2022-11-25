import { Stock } from "./../entity/Stock";
import { User } from "./../entity/User";
import { Request, Response } from "express";

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await User.findOneBy({ username: username });

  if (!user || password !== user.password)
    res.status(404).json({ message: "user not found" });

  return res.json(user);
};

export const addStockToUser = async (req: Request, res: Response) => {
  const { symbol, currentUserId } = req.body;
  const user = await User.findOneBy({ id: currentUserId });

  if (!user) res.status(404).json({ message: "user not found" });

  const newStock = new Stock();

  newStock.symbol = symbol.symbol;
  newStock.name = symbol.name;
  newStock.currency = symbol.currency;
  newStock.user = currentUserId;

  await newStock.save();

  return res.json(newStock);
};

export const getUserStocks = async (req: Request, res: Response) => {
  const { id } = req.params;

  const stocks = await Stock.find({
    relations: { user: true },
    where: { user: { id: parseInt(id) }, isActive: true },
  });

  return res.json(stocks);
};

export const deleteStockFromUser = async (req: Request, res: Response) => {
  const { currentUserId, stock } = req.body;

  const user = await User.findOneBy({ id: currentUserId });

  if (!user) res.status(404).json({ message: "user not found" });

  const stockUpdated = await Stock.update(stock.id, stock);

  if (!stockUpdated) res.status(404).json({ message: "stock not found" });

  return res.json(stockUpdated);
};
