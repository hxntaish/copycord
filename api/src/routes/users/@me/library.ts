import { Router, Response, Request } from "express";
import { route } from "@copycord/api";

const router = Router();

router.get("/", route({}), (req: Request, res: Response) => {
	// TODO:
	res.status(200).send([]);
});

export default router;
