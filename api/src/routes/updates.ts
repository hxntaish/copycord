import { Router, Response, Request } from "express";
import { route } from "@copycord/api";
import { Config, Release } from "@copycord/util";

const router = Router();

router.get("/", route({}), async (req: Request, res: Response) => {
	const { client } = Config.get();

    const release = await Release.findOneOrFail({ name: client.releases.upstreamVersion})

	res.json({
        name: release.name,
        pub_date: release.pub_date,
        url: release.url,
        notes: release.notes
    });
});

export default router;
