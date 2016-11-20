import {Component, Input} from '@angular/core';

@Component({
	selector: 'verdict-card',
	template: `
	<div class="verdict-card-wrap">
		<img src="{{img_src}}">
		<div class="verdict-card-body">
			<ng-content></ng-content>
		</div>
		<div [ngClass]="{'verdict-footer-positive': success, 'verdict-footer-negative' : !success}"></div>
	</div>
`
})
export class VerdictCardComponent {
	@Input() img_src: string;
	@Input() success: boolean;
}