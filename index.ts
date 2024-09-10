// console.log("b")

import http, { IncomingMessage, ServerResponse } from "http";
import fs from 'fs';

fs.readFileSync('./static/index.html', 'utf-8')


const server = http.createServer( //handler or request handling function
	(req: IncomingMessage, res: ServerResponse) => {
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/html");
		res.end("<h1>Hello fellow developer!</h1>");
	}
);


const hostname: string = "localhost";
const port: number = 3000;

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
