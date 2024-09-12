import express, { Response, Request } from "express";
import morgan from "morgan";

const app = express();

app.get("/", (req: Request, res: Response) => {
	res.send("Hello Salt");
});

const port = 3000;
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}/`);
});
