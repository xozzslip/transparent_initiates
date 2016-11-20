// export interface
export interface IInitiative {
	url?:string;
	id?:number;
	description?:string;
	name?:string;
	term?:string;
	theme?:string;
	city?:string;
	pic?:string;
	creator?:string;
	departments?: Array<number>;
	progress?: number;
	meaningfull?: string;
	results?: string;
	structure?: string;
	states?: string;
}

export class InitiativeModel {
	url:string;
	id: number;
	description:string;
	name:string;
	term:string;
	theme:string;
	city:string;
	pic:string;
	creator:string;
	departments: Array<number>;
	progress: number;
	meaningfull: string;
	results: string;
	structure: string;
	states: string;

	constructor(model?:IInitiative) {
		if (!!model) {
			this.id = model.id || null;
			this.url = model.url || '';
			this.description = model.description || '';
			this.name = model.name || '';
			this.term = model.term || '';
			this.theme = model.theme || '';
			this.city = model.city || '';
			this.pic = model.pic || '';
			this.creator = model.creator || '';
			this.departments = model.departments || [];
			this.progress = model.progress || null;
			this.meaningfull = model.meaningfull || '';
			this.results = model.results || '';
			this.structure = model.structure || '';
			this.states = model.states || '';
		}
		else {
			this.id = null;
			this.url = '';
			this.description = '';
			this.name = '';
			this.term = '';
			this.theme = '';
			this.city = '';
			this.pic = '';
			this.creator = '';
			this.departments = [];
			this.progress = null;
			this.meaningfull = '';
			this.results = '';
			this.structure = '';
			this.states = '';
		}
	}
}