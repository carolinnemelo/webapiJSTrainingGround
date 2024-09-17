import morgan from "morgan";
import express, { Request, Response, NextFunction } from "express";

const app = express();

app.use(morgan("tiny"));

app.get("/", (req: Request, res: Response) => {
  res.send("Salt");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
