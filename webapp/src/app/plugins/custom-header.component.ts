import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'custom-header',
    template: `
			<header class="main-header-banner flex">
				<div class="menu-item" (click)="routeTo('/projects')">Список проектов</div>
				<div class="menu-item" (click)="routeTo('/addInitiative')">Добавить проект <b>+</b></div>
			</header>		
`
})
export class CustomHeaderComponent {
	constructor(private router: Router) {}

	private routeTo(url: string) {
		this.router.navigate([url]);
	}
}