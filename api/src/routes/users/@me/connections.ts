import { Request, Response, Router } from "express";
import { route } from "@copycord/api";

const router: Router = Router();

router.get("/", route({}), async (req: Request, res: Response) => {
	//TODO
	res.json([]).status(200);
});

export default router;
