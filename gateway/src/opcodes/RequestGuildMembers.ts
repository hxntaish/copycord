import { Payload, WebSocket } from "@copycord/gateway";

export function onRequestGuildMembers(this: WebSocket, data: Payload) {
	// return this.close(CLOSECODES.Unknown_error);
}
