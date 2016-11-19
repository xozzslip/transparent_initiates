import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'custom-header',
    template: `
			<header class="main-header-banner flex">
				<div class="menu-item" (click)="routeTo('/')">Список проектов</div>
				<div class="menu-item" (click)="routeTo('/')">Добавить проект <b>+</b></div>
				<!--<div class="menu-item">Пункт меню 3</div>-->
			</header>		
`
})
export class CustomHeaderComponent {
	constructor(private router: Router) {}

	private routeTo(url: string) {
		this.router.navigate([url]);
	}
}