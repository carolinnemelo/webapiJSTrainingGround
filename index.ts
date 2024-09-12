import express, { Response, Request } from "express";


const app = express();

const db = [
	{
		id: 1,
		name: "Marcus Dev",
		email: "marcus@salt.dev",
	},
];

app.get("/api/developers", (req: Request, res: Response) => {
	res
    .status(200)
    .json(db);
});

const port = 3000;
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}/`);
});
