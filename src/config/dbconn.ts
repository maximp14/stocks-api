import { Stock } from "./../entity/Stock";
import { DataSource } from "typeorm";
import { User } from "../entity/User";

// this should be with a config file or env
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "root",
  password: "root",
  database: "stockdb",
  synchronize: true,
  logging: false,
  entities: [User, Stock],
});
