import express = require("express");
import { Application, Response, Request } from "express";

const app: Application = express();
const port: number = 3000;

interface IRomanName {
  praenomen: string;
  nomen: string;
  cognomen: string;
}

app.get("/", (_: Request, res: Response) => {
  res.json({status: 'ok'})
});

app.get("/name", (_: Request, res: Response) => {
  const name: IRomanName = {
    praenomen: "Titus",
    nomen: "Flavius",
    cognomen: "Petro"
  }
  res.json({name: `${name.praenomen} ${name.nomen} ${name.cognomen}`});
});

app.listen(port, () => console.log(`API is listening on port ${port}!`));
