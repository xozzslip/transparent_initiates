export interface IComment {
	text?:string;
	creator?:string;
	initiative?:string;
	id?:number;
}

export class CommentModel {
	text:string;
	creator:string;
	initiative:string;
	id:number;

	constructor(model?:IComment) {
		if (!!model) {
			this.text = model.text || '';
			this.creator = model.creator || '';
			this.initiative = model.initiative || '';
			this.id = model.id || null;
		}
		else {
			this.text = '';
			this.creator = '';
			this.initiative = '';
			this.id = null;
		}
	}
}