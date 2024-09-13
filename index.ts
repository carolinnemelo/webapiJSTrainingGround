import express, { Response, Request } from "express";


const app = express();

const db = [
	{
		id: 1,
		name: "Marcus Dev",
		email: "marcus@salt.dev",
	},
	{
		id: 2,
		name: "Carolinne",
		email: "carolinne.melo@blabla.com",
	},
];

app.get("/api/developers", (req: Request, res: Response) => {
	res
    .status(200)
    .json(db);
});

app.get("/api/developers/:id", (req, res) => {
    const id = Number(req.params.id);
    const devById = db.find(e => e.id === id);
    if (!devById) {
        res.status(404).end();
        return
    }
    res.json(devById);
    return; 


});

const port = 3000;
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}/`);
});
