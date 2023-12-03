import { Request, Response, Router } from "express";
import { route } from "@copycord/api";
import { StickerPack } from "@copycord/util";

const router: Router = Router();

router.get("/", route({}), async (req: Request, res: Response) => {
	const sticker_packs = await StickerPack.find({ relations: ["stickers"] });

	res.json({ sticker_packs });
});

export default router;
