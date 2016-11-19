import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {DefaultService} from "../../services/default.service";
import {IInitiative} from "../../models/initiative.model";

@Component({
    selector: 'main-page',
    template: `
		<custom-header></custom-header>
		<div class="content">
		    <div class="flex-cards">
                <card *ngFor="let initiative of initiatives; let i = index" [img_src]="initiative.pic"
                (click)="routeTo('initiative/', initiative.id)">
                    <p class="card-title">{{initiative.name}}</p>
                    <p>Заказчик: {{initiative.customer}}</p>
                    <p>Ожидаемые сроки реализации: {{initiative.term}}</p>
                    <div>
						<city-name>{{initiative.city}}</city-name>
					</div>
                </card>
            </div>
		</div>`
})
export class MainPageComponent implements OnInit {
    private initiatives: Array<IInitiative> = [];

    constructor(private http: Http, private router: Router, private defaultService: DefaultService) { }

    ngOnInit() {
		this.defaultService.get<IInitiative>('http://127.0.0.1:8000/initiatives')
			.then((result: Array<IInitiative>) => {
				this.initiatives = result;
			});
    }

	private routeTo(url: string, id: number) {
		url += id;
		this.router.navigate([url]);
	}

}