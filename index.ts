import express, { Response, Request } from "express";


const app = express();


app.get("/", (req: Request, res: Response) => {
    const user = {
        id: 1,
        name: "Marcus",
        email: "marcus@salt.dev",
        cv: "I've been coding since last week. Take me in"
    }
    res
        .status(201)
        .setHeader("location", `/api/developers/1`)
        .json(user)
});

const port = 3000;
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}/`);
});
