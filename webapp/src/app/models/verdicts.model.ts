export interface IVerdict {
	text?: string;
	mark?: number;
	initiative?: string;
	department?: string;
	id?: number;
}

export class VerdictModel {
	text: string;
	mark: number;
	initiative: string;
	department: string;
	id: number;

	constructor(model?: IVerdict) {
		if(!!model) {
			this.text = model.text || '';
			this.mark = model.mark || null;
			this.initiative = model.initiative || '';
			this.department = model.department || '';
			this.id = model.id || null;
		}
		else {
			this.text = '';
			this.mark = null;
			this.initiative = '';
			this.department = '';
			this.id = null;
		}
	}
}