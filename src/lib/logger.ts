export class Logger {
	private id: string = "";

	constructor(id: string) {
		if (id) {
			this.id = id;
		}
	}

	public log(message: any, ...rest: any[]) {
		console.log(`[ ${this.id} ]:`, message, rest);
	}

	public warn(message: any, ...rest: any[]) {
		console.warn(`[ ${this.id} ]:`, message, rest);
	}

	public error(message: any, ...rest: any[]) {
		console.error(`[ ${this.id} ]:`, message, rest);
	}
}
