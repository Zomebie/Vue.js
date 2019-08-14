import { Client } from "../../node_modules/pg";

export default new Client({
  user: "postgres",
  host: "localhost",
  database: "test",
  password: "wldbs77",
  port: 5432
});
