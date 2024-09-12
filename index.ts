
import express, { Request, Response, NextFunction } from "express";

const app = express();

const saltLogger = function (req: Request, res: Response, next: NextFunction) {
	console.log(`salt> ${req.method} - ${req.url}`);
	next();
};

app.use(saltLogger);
app.use(express.static("static"));

app.get("/", (req: Request, res: Response) => {
	res.send("Hello fellow developer!");
});

const port = 3000;
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}/`);
});
