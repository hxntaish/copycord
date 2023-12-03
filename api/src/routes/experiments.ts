import { Router, Response, Request } from "express";
import { route } from "@copycord/api";

const router = Router();

router.get("/", route({}), (req: Request, res: Response) => {
	// TODO:
	res.send({ fingerprint: "", assignments: [], guild_experiments:[] });
});

export default router;
