export interface IComment {
	text?:string;
	creator?:Object;
	initiative?:number;
	id?:number;
}

export class CommentModel {
	text:string;
	creator:Object;
	initiative:string;
	id:number;

	constructor(model?:IComment) {
		if (!!model) {
			this.text = model.text || '';
			this.creator = model.creator || null;
			this.initiative = model.initiative || '';
			this.id = model.id || null;
		}
		else {
			this.text = '';
			this.creator = null;
			this.initiative = '';
			this.id = null;
		}
	}
}