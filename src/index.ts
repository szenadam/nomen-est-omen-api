import express = require("express");
import { Application, Response, Request } from "express";
import * as morgan from 'morgan';

const app: Application = express();
const port: number = 3000;

const db: IRomanNameDb = require('../data/roman-names.json');
const {praenomines, nomines, cognomines } = db;

interface IPraenomen {
  name: string;
  abbr: string;
  source: string;
}

interface INomen {
  nomen: string;
  source: string;
}

interface ICognomen {
  name: string;
  source: string;
}

interface IRomanNameDb {
  praenomines: IPraenomen[];
  nomines: INomen[];
  cognomines: ICognomen[];
}

app.use(morgan('combined'));

app.get("/", (_: Request, res: Response) => {
  res.json({ status: 'ok' })
});

app.get("/name", (_: Request, res: Response) => {
  const praenomen = praenomines[Math.floor(Math.random() * praenomines.length)]
  const nomen = nomines[Math.floor(Math.random() * nomines.length)]
  const cognomen = cognomines[Math.floor(Math.random() * cognomines.length)]
  res.json({ name: `${praenomen.name} ${nomen.nomen} ${cognomen.name}` });
});

app.listen(port, () => console.log(`API is listening on port ${port}!`));
