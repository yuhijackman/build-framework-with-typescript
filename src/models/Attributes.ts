export class Attributes<T> {
	constructor(private data: T)  {}
	//  When you don't know what type you will return
	// opt1: union
	// opt2: Type assertion Ex) .get('id') as number
	get = <K extends keyof T>(key: K): T[K] => {
		return this.data[key];
	}

	set(update: T): void {
		Object.assign(this.data, update);
	}

	getAll(): T {
		return this.data;
	}
}
