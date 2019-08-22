import { Router } from "express";

export const routes = Router();

routes.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

routes.post("/post-route", (req, res) => {
  console.log(req.body);
  res.json({ status: "Body received" });
});
