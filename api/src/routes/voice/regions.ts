import { Router, Request, Response } from "express";
import { getIpAdress, route } from "@copycord/api";
import { getVoiceRegions } from "@copycord/api";

const router: Router = Router();

router.get("/", route({}), async (req: Request, res: Response) => {
	res.json(await getVoiceRegions(getIpAdress(req), true)); //vip true?
});

export default router;
