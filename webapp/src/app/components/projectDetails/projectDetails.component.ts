import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {InitiativeModel, IInitiative} from "../../models/initiative.model";
import {ActivatedRoute} from '@angular/router';
import {DefaultService} from "../../services/default.service";
import {IComment, CommentModel} from "../../models/comment.model";
import {IUser} from "../../models/user.model";
import {FormGroup, FormControl, Validators}   from '@angular/forms';
import {IVerdict} from "../../models/verdicts.model";


@Component({
	selector: 'main-page',
	template: `
			<custom-header></custom-header>
			<div class="content-details">
				<div class="banner">
					<img class="big-picture" src="{{initiative.pic}}">
					<h1>{{initiative.name}}</h1>
				</div>
				<div class="initiative-info">
					<div class="short-info">
						<p><b>Тема:</b> {{initiative.theme}}</p>
						<p><b>Ожидаемые сроки реализации:</b> {{initiative.term}} дней</p>
						<p><b>Город:</b> {{initiative.city}}</p>
					</div>
					<hr/>
					<div class="expandable-info">
						<p><b>Обоснование целесообразности проекта:</b> {{initiative.description}}</p>
					</div>
					<div class="expandable-info">
						<p><b>Ожидаемые результаты:</b> {{initiative.meaningfull}}</p>
					</div>
					<div class="expandable-info">
						<p><b>Продукт проекта:</b> {{initiative.results}}</p>
					</div>
					<div class="expandable-info">
						<p><b>Структура:</b> {{initiative.structure}}</p>
					</div>
					<div class="expandable-info">
						<p><b>Основные этапы:</b> {{initiative.states}}</p>
					</div>
				</div>
			</div>
			<div class="flex-cards">
				<verdict-card *ngFor="let verdict of verdicts" [img_src]="verdict.imgUrl" [success]="verdict.success">
					<p>{{verdict.text}}</p>
				</verdict-card>
			</div>
			<div class="content">
				<comment *ngFor="let comment of comments" 
				[username]="comment.creator.username" [text]="comment.text"></comment>
			</div>
			<form class="content comment-form" [formGroup]="myForm" (submit)="onSubmit(myForm.value)">
				<textarea formControlName="text" placeholder="Ваш комментарий..." rows="5"></textarea>
				<button type="submit" [disabled]="!myForm.valid" class="btn btn-success">Отправить комментарий</button>
			</form>`
})
export class ProjectDetailsComponent implements OnInit {
	private initId: number = null;
	private initiative:InitiativeModel = new InitiativeModel();
	private comments:Array<IComment> = [];
	private verdicts: Array<IVerdict> = [];
	private myForm:FormGroup;

	constructor(private http:Http, private defaultService:DefaultService, private activatedRoute:ActivatedRoute) {}

	ngOnInit() {
		this.activatedRoute.params
			.subscribe((param:any) => {
				// this.defaultService.get<IInitiative>(`http://localhost:8000/api/initiatives/${this.initiativeId}/`)
				// 	.then((initiative:IInitiative) => {
				// 		this.initiative = new InitiativeModel(initiative);
				// 	});
				this.initId = +param['id'];
				this.initiative = projects.find(x => x.id === this.initId);
				this.comments = comments.filter(x => x.initiative === this.initiative.id);
				this.verdicts = verdicts.filter(x => x.projectId === this.initiative.id);
			});



		// this.defaultService.get<Array<IComment>>('http://localhost:8000/api/comments/')
		// 	.then((comments) => {
		// 		this.comments = comments.filter(x => x.initiative === this.initiative.url);
		// 		this.comments.forEach((comment:IComment) => {
		// 			this.defaultService.get<IUser>(comment.creator)
		// 				.then((user) => {
		// 					this.authors.push(user);
		// 				});
		// 		});
		// 	});

		this.myForm = new FormGroup({
			text: new FormControl('', Validators.required),
			creator: new FormControl({
				"username" : "Анатолий",
				"id" : 1,
			})
			//initiative: new FormControl(`http://localhost:8000/api/initiatives/${this.initiativeId}/`)
		})
	}

	private refresh() {
		this.comments = comments.filter(x => x.initiative === this.initiative.id);
	}

	private onSubmit(value) {
		// this.defaultService.post('http://localhost:8000/api/comments/', new CommentModel(value))
		// 	.then(() => {
		// 		this.myForm.controls['text'].setValue('');
		// 		this.refresh();
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});
		comments.push({
			"text" : value.text,
			"creator" : {
				"username" : "Анатолий",
				"id" : 1,
			},
			"initiative" : this.initId,
			"id" : comments[comments.length - 1].id + 1
		});
		this.myForm.controls['text'].setValue('');
		this.refresh();
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
		"pic" : "../../assets/img/projects/Kindergarten 1020х300.jpg",
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
		"name" : "Завод по переработке мусора",
		"term" : 200,
		"theme" : "Переработка отходов",
		"city" : "Санкт-Петербург",
		"pic" : "../../assets/img/projects/Factory-building 1020x300.jpg",
		"creator" : {

		},
		"departments" : [],
		"progress" : 20,
		"meaningfull" : "Целесообразность реализации проекта обусловлена следующим факторам. Большое количество бытового мусора нуждается в переработке. С помощью нашей технологии отходы перерабатываются в биогаз",
		"results" : "1.	Переработка 1000 тонн мусора в 10 литров топлива.",
		"structure" : "1 часть. Участок подготовки отходов к переработке.На данном участке отходы промываются, просеиваются через сито с размером ячейки в 3-5 сантиметров, после чего крупный мусор подвергается процессу измельчения.\n2 часть. Участок пиролиза.На участке пиролиза смесь отходов попадает в пиролизную печь, где подвергается термодеструкции. По окончании процесса полученная синтетическая нефть поступает на участок дистиляции. На выходе пиролизной установки образуется около 7 тонн нефти.\n3 часть. Участок дистиляции.На третьей стадии переработки нефть перегоняется и разделяется на составляющие фракции, такие как бензин, керосин и т.д. Во время фракционирования нефти образуется остаток в виде мазута, который возвращается в переработку в качестве сырья для пиролизной смеси. Так как мазут возвращается в переработку, можно принять, что из 1 тонны нефти получается 1 тонна нефти.",
		"states" : "1.	Выбор места для реализации проекта\n2.	Заказать материалы\n3.	Подготовить место под строительство\n4.	Строительство основного цеха\n5.	Строительство цехов переработки\n6.	Апробация7.	Сдача проекта"
	},
	{
		"id" : 3,
		"description" : "Описание",
		"name" : "Название проекта 1",
		"term" : 200,
		"theme" : "Благоустройство города",
		"city" : "Санкт-Петербург",
		"pic" : "../../assets/img/projects/kioski-s-zhurnalami 1020х300.jpg",
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
		"pic" : "../../assets/img/projects/store 1020х300.jpg",
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

let comments = [
	{
		"text" : "Отличная идея! Одобряю",
  		"creator" : {
			"username" : "Анатолий",
			"id" : 1,
		},
		"initiative" : 1,
		"id" : 1
	},
	{
		"text" : "НЕ согласен",
		"creator" : {
			"username" : "Виктор",
			"id" : 2,
		},
		"initiative" : 1,
		"id" : 2
	},
	{
		"text" : "Очень полезная идея",
		"creator" : {
			"username" : "Анастасия",
			"id" : 1,
		},
		"initiative" : 2,
		"id" : 3
	},
	{
		"text" : "Отличная идея! Одобряю",
		"creator" : {
			"username" : "Инна",
			"id" : 3,
		},
		"initiative" : 3,
		"id" : 4
	},
	{
		"text" : "10/10",
		"creator" : {
			"username" : "Инна",
			"id" : 3,
		},
		"initiative" : 1,
		"id" : 5
	},
];

let verdicts = [
	{
		"id" : 1,
		"imgUrl" : "../../assets/img/verdicts/1.jpg",
		"organization" : "",
		"text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"projectId" : 2,
		"success" : true
	},
	{
		"id" : 2,
		"imgUrl" : "../../assets/img/verdicts/2.png",
		"organization" : "",
		"text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"projectId" : 2,
		"success" : true
	},
	{
		"id" : 3,
		"imgUrl" : "../../assets/img/verdicts/3.jpg",
		"organization" : "",
		"text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"projectId" : 2,
		"success" : false
	},
	{
		"id" : 4,
		"imgUrl" : "../../assets/img/verdicts/4.jpg",
		"organization" : "",
		"text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"projectId" : 2,
		"success" : true
	},
	{
		"id" : 5,
		"imgUrl" : "../../assets/img/verdicts/5.jpg",
		"organization" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"projectId" : 2,
		"success" : false
	},
	{
		"id" : 6,
		"imgUrl" : "../../assets/img/verdicts/6.jpg",
		"organization" : "",
		"text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"projectId" : 2,
		"success" : false
	}
];