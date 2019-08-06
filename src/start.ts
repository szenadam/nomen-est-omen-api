import express = require("express");
import { Application } from "express";

const app: Application = express();
const port: number = 3000;

app.get("/", (req: any, res: any) => res.send("Hello World!"));

app.listen(port, () => console.log(`API is listening on port ${port}!`));
