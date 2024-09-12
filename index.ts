
import express, { Request, Response} from "express";

const app = express();
app.use(express.static("static"));

app.get("/", (req: Request, res: Response) => {
	res.send("Hello fellow developer!");
});

const port = 3000;
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}/`);
});
