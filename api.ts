import express, { Response, Request, Express } from "express";

const app: Express = express();

type Developer = {
  id: number;
  name: string;
  email: string;
};

export const db: Developer[] = [
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

app.use(express.json());

app.get("/api/developers", (req: Request, res: Response) => {
  res.status(200).json(db);
});

app.get("/api/developers/:id/", (req, res) => {
  const id = Number(req.params.id);
  const devById = db.find((e) => e.id === id);

  return devById ? res.json(devById) : res.status(404).end();
});

app.post("/api/developers/", (req, res) => {
  const { name, email } = req.body;

  if (!name) {
    res.status(400).send("Name is required");
    return;
  }

  if (!email) {
    res.status(400).send("Email is required");
    return;
  }

  if (db.find((dev) => dev.name === name || dev.email === email)) {
    res
      .status(409) //Conflict
      .send(`Developer with the same name or email already exists`);
    return;
  }

  const newDev: Developer = {
    id: db.length + 1,
    name: req.body.name,
    email: req.body.email,
  };

  db.push(newDev);

  res
    .status(201)
    .setHeader("location", `/api/developers/${newDev.id}`)
    .json(newDev);
});

app.patch("/api/developers/:id", (req, res) => {
  const id = Number(req.params.id);
  const devById = db.find((e) => e.id === id);
  if (!devById) {
    res.status(404).end();
    return;
  }
  if (req.body.name) {
    devById.name = req.body.name;
  }

  if (req.body.email) {
    devById.email = req.body.email;
  }

  console.log(devById);

  res
    .status(201)
    .setHeader("location", `/api/developers/${devById.id}`)
    .json(devById);
});

app.delete("/api/developers/:id", (req, res) => {
  const id = Number(req.params.id);
  const devById = db.find((e) => e.id === id);

  if (devById) {
    db.splice(db.indexOf(devById), 1);
    res.status(204).end();
    return;
  }

  res.status(404).end();
});

export default app;
