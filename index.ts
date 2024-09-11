import http, { IncomingMessage, ServerResponse } from "http";
import fs from "fs";

const fileNameOfUrl = (url: string) => {
	let fileName = "";
	if (url.split("/")[1] === "") {
		fileName = "index.html";
	} else {
		fileName = url.split("/")[1];
	}
	return fileName;
};

const server = http.createServer(
	//handler or request handling function
	(req: IncomingMessage, res: ServerResponse) => {
		console.log(`The URL for the request was '${req.url}'`);
		console.log(`The METHOD for the request was '${req.method}'`);

        const fileName = fileNameOfUrl(req.url);
		const content = fs.readFileSync("./static/index.html", "utf-8");

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
