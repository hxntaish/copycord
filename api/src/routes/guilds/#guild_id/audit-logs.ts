import { Router, Response, Request } from "express";
import { Channel, ChannelUpdateEvent, getPermission, emitEvent } from "@copycord/util";
import { HTTPError } from "lambert-server";
import { route } from "@copycord/api";
import { ChannelModifySchema } from "../../channels/#channel_id";
const router = Router();

//TODO: implement audit logs
router.get("/", route({}), async (req: Request, res: Response) => {
	res.json({
		audit_log_entries: [],
		users: [],
		integrations: [],
		webhooks: [],
		guild_scheduled_events: [],
		threads: [],
		application_commands: []
	});
});
export default router;
