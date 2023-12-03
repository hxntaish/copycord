import { getPermission, Invite, PublicInviteRelation } from "@copycord/util";
import { route } from "@copycord/api";
import { Request, Response, Router } from "express";

const router = Router();

router.get("/", route({ permission: "MANAGE_GUILD" }), async (req: Request, res: Response) => {
	const { guild_id } = req.params;

	const invites = await Invite.find({ where: { guild_id }, relations: PublicInviteRelation });

	return res.json(invites);
});

export default router;
