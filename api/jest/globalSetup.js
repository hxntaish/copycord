const { Config, initDatabase } = require("@copycord/util");
const fs = require("fs");
const path = require("path");
const { copycordServer } = require("../dist/Server");
const Server = new copycordServer({ port: 3001 });
global.server = Server;
module.exports = async () => {
	try {
		fs.unlinkSync(path.join(process.cwd(), "database.db"));
	} catch {}

	await initDatabase();
	await Config.init();
	Config.get().limits.rate.disabled = true;
	return await Server.start();
};

// afterAll(async () => {
// 	return await Server.stop();
// });
