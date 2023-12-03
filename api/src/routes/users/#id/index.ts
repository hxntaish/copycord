import { Router, Request, Response } from "express";
import { User } from "@copycord/util";
import { route } from "@copycord/api";

const router: Router = Router();

router.get("/", route({}), async (req: Request, res: Response) => {
	const { id } = req.params;

	res.json(await User.getPublicUser(id));
});

export default router;
