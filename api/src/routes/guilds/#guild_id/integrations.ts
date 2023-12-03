import { Router, Response, Request } from "express";
import { Channel, ChannelUpdateEvent, getPermission, emitEvent } from "@copycord/util";
import { HTTPError } from "lambert-server";
import { route } from "@copycord/api";
import { ChannelModifySchema } from "../../channels/#channel_id";
const router = Router();

//TODO: implement integrations list
router.get("/", route({}), async (req: Request, res: Response) => {
	res.json([]);
});
export default router;
