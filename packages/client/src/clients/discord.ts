import { Client } from 'eris';

export default class disApiClient {
	readonly client: Client;
	connected: boolean;
	constructor(token: string, public readonly option: any) {
		this.client = new Client(token, option);
		this.client.connect().then(() => {
			this.connected = true;
		});
	}
}
