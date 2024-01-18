// index.js
// where your node app starts

// init project
import dotenv from "dotenv";
import express from "express";
const app = express();
dotenv.config();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
import cors from "cors";
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
	res.sendFile(process.cwd() + "/views/index.html");
});

app.get("/api/whoami", function (req, res) {
	const ipaddress = req.headers["x-forwarded-for"].split(",")[0];
	const language = req.headers["accept-language"];
	const software = req.headers["user-agent"];
	res.json({ ipaddress, language, software });
});

// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, () => {
	console.log("Your app is listening on port " + listener.address().port);
});
