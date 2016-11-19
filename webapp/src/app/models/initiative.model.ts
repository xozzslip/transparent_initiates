export interface IInitiative {
	url?:string;
	id?:number;
	description?:string;
	name?:string;
	term?:string;
	customer?:string;
	city?:string;
	pic?:string;
	creator?:string;
}

export class InitiativeModel {
	url:string;
	id: number;
	description:string;
	name:string;
	term:string;
	customer:string;
	city:string;
	pic:string;
	creator:string;

	constructor(model?:IInitiative) {
		if (!!model) {
			this.id = model.id || null;
			this.url = model.url || '';
			this.description = model.description || '';
			this.name = model.name || '';
			this.term = model.term || '';
			this.customer = model.customer || '';
			this.city = model.city || '';
			this.pic = model.pic || '';
			this.creator = model.creator || '';
		}
		else {
			this.id = null;
			this.url = '';
			this.description = '';
			this.name = '';
			this.term = '';
			this.customer = '';
			this.city = '';
			this.pic = '';
			this.creator = '';
		}
	}
}