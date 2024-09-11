// console.log("b")

import http, { IncomingMessage, ServerResponse } from "http";
import fs from 'fs';




const server = http.createServer( //handler or request handling function
	(req: IncomingMessage, res: ServerResponse) => {
        const content = fs.readFileSync('./static/index.html', 'utf-8'); 
        
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/html");
		res.end(content);
	}
);


const hostname: string = "localhost";
const port: number = 3000;

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
