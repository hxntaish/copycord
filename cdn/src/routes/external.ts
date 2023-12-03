import { Router, Response, Request } from "express";
import fetch from "node-fetch";
import { HTTPError } from "lambert-server";
import { Snowflake } from "@copycord/util";
import { storage } from "../util/Storage";
import FileType from "file-type";
import { Config } from "@copycord/util";

// TODO: somehow handle the deletion of images posted to the /external route

const router = Router();
const DEFAULT_FETCH_OPTIONS: any = {
	redirect: "follow",
	follow: 1,
	headers: {
		"user-agent":
			"Mozilla/5.0 (compatible copycordbot/0.1; +https://copycord.com)",
	},
	size: 1024 * 1024 * 8,
	compress: true,
	method: "GET",
};

router.post("/", async (req: Request, res: Response) => {
	if (req.headers.signature !== Config.get().security.requestSignature)
		throw new HTTPError("Invalid request signature");

	if (!req.body) throw new HTTPError("Invalid Body");

	const { url } = req.body;
	if (!url || typeof url !== "string") throw new HTTPError("Invalid url");

	const id = Snowflake.generate();

	try {
		const response = await fetch(url, DEFAULT_FETCH_OPTIONS);
		const buffer = await response.buffer();

		await storage.set(`/external/${id}`, buffer);

		res.send({ id });
	} catch (error) {
		throw new HTTPError("Couldn't fetch website");
	}
});

router.get("/:id", async (req: Request, res: Response) => {
	const { id } = req.params;

	const file = await storage.get(`/external/${id}`);
	if (!file) throw new HTTPError("File not found");
	const result = await FileType.fromBuffer(file);

	res.set("Content-Type", result?.mime);

	return res.send(file);
});

export default router;
