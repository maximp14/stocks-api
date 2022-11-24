import { AppDataSource } from "./config/dbconn";
import app from "./server";

async function main() {
  try {
    await AppDataSource.initialize();
    //this also should be in a config or env file.
    app.listen(3000);
  } catch (error) {
    console.error(error);
  }
}

main();
