import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'card',
    template: `
	<div class="card-wrap">
		<img src="{{img_src}}">
		<div class="card-body">
			<ng-content></ng-content>
		</div>
		<div class="card-footer"></div>
	</div>
`
})
export class CardComponent implements OnInit {
    @Input() img_src: string;

    constructor() { }

    ngOnInit() { }

}