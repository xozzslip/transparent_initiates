import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {InitiativeModel, IInitiative} from "../../models/initiative.model";
import {ActivatedRoute} from '@angular/router';
import {DefaultService} from "../../services/default.service";
import {IComment, CommentModel} from "../../models/comment.model";
import {IUser} from "../../models/user.model";
import {FormGroup, FormControl, Validators}   from '@angular/forms';


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
						<p>Заказчик: {{initiative.customer}}</p>
						<p>Ожидаемые сроки реализации: {{initiative.term}}</p>
						<p>Город: {{initiative.city}}</p>
					</div>
					<hr/>
					<div class="expandable-info">
						<p>{{initiative.description}}</p>
					</div>
				</div>
			</div>
			<div class="flex-cards">
				<verdict-card [img_src]="''"></verdict-card>
				<verdict-card [img_src]="''"></verdict-card>
				<verdict-card [img_src]="''"></verdict-card>
				<verdict-card [img_src]="''"></verdict-card>
				<verdict-card [img_src]="''"></verdict-card>
				<verdict-card [img_src]="''"></verdict-card>
			</div>
			<div class="content">
				<comment *ngFor="let comment of comments; let i = index" 
				[username]="authors.length>0?authors[i].username:''"
				[text]="comment.text"></comment>	
			</div>
			<form class="content comment-form" [formGroup]="myForm" (submit)="onSubmit(myForm.value)">
				<textarea placeholder="Ваш комментарий..." rows="5"></textarea>
				<button type="submit" class="btn btn-success">Отправить комментарий</button>
			</form>`
})
export class ProjectDetailsComponent implements OnInit {
	private initiative:InitiativeModel = new InitiativeModel();
	private initiativeId:number;
	private comments:Array<IComment> = [];
	private authors:Array<IUser> = [];
	private myForm:FormGroup;

	constructor(private http:Http, private defaultService:DefaultService, private activatedRoute:ActivatedRoute) {
	}

	ngOnInit() {
		this.activatedRoute.params
			.subscribe((param:any) => {
				this.initiativeId = param['id'];
				this.defaultService.get<IInitiative>(`http://localhost:8000/initiatives/${this.initiativeId}/`)
					.then((initiative:IInitiative) => {
						this.initiative = new InitiativeModel(initiative);
					});
			});

		this.defaultService.get<Array<IComment>>('http://localhost:8000/comments/')
			.then((comments) => {
				this.comments = comments;
				this.comments.forEach((comment:IComment) => {
					this.defaultService.get<IUser>(comment.creator)
						.then((user) => {
							this.authors.push(user);
						});
				});
			});

		this.myForm = new FormGroup({
			text: new FormControl('', Validators.required),
			creator: new FormControl('http://localhost:8000/users/1'),
			initiative: new FormControl(`http://localhost:8000/initiatives/${this.initiativeId}/`)
		})
	}

	private getCommentAuthorUsername(url:string) {
		return this.defaultService.get<Array<IComment>>(url)
			.then((user) => {
				return user.username;
			});
	}

	private refresh() {
		this.authors = [];
		this.defaultService.get<Array<IComment>>('http://localhost:8000/comments/')
			.then((comments) => {
				this.comments = comments;
				this.comments.forEach((comment:IComment) => {
					this.defaultService.get<IUser>(comment.creator)
						.then((user) => {
							this.authors.push(user);
						});
				});
			});
	}

	private onSubmit(value) {
		this.defaultService.post('http://localhost:8000/comments/', new CommentModel(value))
			.then(() => {
				this.refresh();
			})
			.catch((error) => {
				console.log(error);
			});
	}
}