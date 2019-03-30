import express from "express";
import path from "path";
import compression from "compression";

import { PORT } from "./env.config";

const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("*", (req, res) => {
  res.render("index");
});

app.listen(PORT, err => {
  if(err)
    console.log(err);
  else
    console.log(`Server online. Listening to port ${PORT}`);
});