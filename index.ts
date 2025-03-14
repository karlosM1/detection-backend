import "reflect-metadata";
import express, { Request, Response, Express } from "express";

const app: Express = express();
const port = 3001;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Worlds!");
});

app.listen(port, () => {
  console.log(`SErver is running at ${port}`);
});
