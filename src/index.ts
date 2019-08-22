import express from "express";
import { routes } from "./routes";

import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.use("/", routes);

app.listen({ port: 8080 }, () => {
  console.log(`🚀 Server listening on port 8080`);
});
