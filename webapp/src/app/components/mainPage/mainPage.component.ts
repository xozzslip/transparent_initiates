import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {DefaultService} from "../../services/default.service";
import {IInitiative} from "../../models/initiative.model";
let projects = require('../../../data/projects.json');

@Component({
    selector: 'main-page',
    template: `
		<custom-header></custom-header>
		<div class="content">
		    <div class="flex-cards">
                <card *ngFor="let initiative of initiatives; let i = index" [img_src]="initiative.pic"
                (click)="routeTo('initiative/', initiative.id)">
                    <p class="card-title">{{initiative.name}}</p>
                    <p>Тема: {{initiative.theme}}</p>
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
		// this.defaultService.get<IInitiative>('http://127.0.0.1:8000/api/initiatives/')
		// 	.then((result: Array<IInitiative>) => {
		// 		this.initiatives = result;
		// 	});

		this.initiatives = projects;
    }

	private routeTo(url: string, id: number) {
		url += id;
		this.router.navigate([url]);
	}
}

let projects = [
	{
		"id" : 1,
		"description" : "Описание",
		"name" : "Название проекта 1",
		"term" : 200,
		"theme" : "Благоустройство города",
		"city" : "Санкт-Петербург",
		"pic" : "../../assets/img/projects/Kindergarten 400х300.jpg",
		"creator" : {

		},
		"departments" : [],
		"progress" : 20,
		"meaningfull" : "Важность проекта",
		"results" : "Результаты проекта",
		"structure" : "Структура проекта",
		"states" : "Основные этапы реализации проекта"
	},
	{
		"id" : 2,
		"description" : "Описание",
		"name" : "Название проекта 1",
		"term" : 200,
		"theme" : "Благоустройство города",
		"city" : "Санкт-Петербург",
		"pic" : "../../assets/img/projects/Factory-building 400x300.jpg",
		"creator" : {

		},
		"departments" : [],
		"progress" : 20,
		"meaningfull" : "Важность проекта",
		"results" : "Результаты проекта",
		"structure" : "Структура проекта",
		"states" : "Основные этапы реализации проекта"
	},
	{
		"id" : 3,
		"description" : "Описание",
		"name" : "Название проекта 1",
		"term" : 200,
		"theme" : "Благоустройство города",
		"city" : "Санкт-Петербург",
		"pic" : "../../assets/img/projects/kioski-s-zhurnalami 400х300.jpg",
		"creator" : {

		},
		"departments" : [],
		"progress" : 20,
		"meaningfull" : "Важность проекта",
		"results" : "Результаты проекта",
		"structure" : "Структура проекта",
		"states" : "Основные этапы реализации проекта"
	},
	{
		"id" : 4,
		"description" : "Описание",
		"name" : "Название проекта 1",
		"term" : 200,
		"theme" : "Благоустройство города",
		"city" : "Санкт-Петербург",
		"pic" : "../../assets/img/projects/store 400х300.jpg",
		"creator" : {

		},
		"departments" : [],
		"progress" : 20,
		"meaningfull" : "Важность проекта",
		"results" : "Результаты проекта",
		"structure" : "Структура проекта",
		"states" : "Основные этапы реализации проекта"
	}
];