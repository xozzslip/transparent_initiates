export interface IUser {
	url?:string;
	username?:string;
	email?:string;
	groups?:Array<number>;
	id?:number;
}

export class UserModel {
	url:string;
	username:string;
	email:string;
	groups:Array<number>;
	id:number;

	constructor(model?:IUser) {
		if (!!model) {
			this.url = model.url || '';
			this.username = model.username || '';
			this.email = model.email || '';
			this.groups = model.groups || [];
			this.id = model.id || null;
		}
		else {
			this.url = '';
			this.username = '';
			this.email = '';
			this.groups = [];
			this.id = null;
		}
	}
}