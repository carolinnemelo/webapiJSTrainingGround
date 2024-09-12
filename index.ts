import http, { IncomingMessage, ServerResponse } from "http";
import fs from "fs";

const fileNameOfUrl = (url: any) => {
	let fileName = "";
	if (url.split("/")[1] === "") {
		fileName = "index.html";
		console.log(fileName);
	} else {
		fileName = url.split("/")[1];
	}
	return fileName;
};

const getFileContentOr404 = (fileName: string) => {
	if (!fs.existsSync(`./static/${fileName}`)) {
		fileName = "404.html";
	}

	return fs.readFileSync(`./static/${fileName}`, "utf-8");
};

const server = http.createServer(
	//handler or request handling function
	(req: IncomingMessage, res: ServerResponse) => {
		console.log(`The URL for the request was '${req.url}'`);
		console.log(`The METHOD for the request was '${req.method}'`);
		const fileName = fileNameOfUrl(req.url);

		if (fileName === "favicon.ico") {
			res.statusCode = 404;
			res.end("");
			return;
		}

		const content = getFileContentOr404(fileName);

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
