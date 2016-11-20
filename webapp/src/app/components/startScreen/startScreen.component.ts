import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
    selector: 'start-screen',
    template: `
		<!--<img src="../../../../assets/img/startPage.jpg"/>-->
		<div class="team-img">
			<div class="greetings-message">
				<h1>Команда InPro</h1>
				<form [formGroup]="myForm">
					<fieldset class="row"><input formControlName="login" type="text" class="form-control" placeholder="Логин"/></fieldset>
					<fieldset class="row"><input formControlName="password" type="password" class="form-control" placeholder="Пароль"/></fieldset>
					<fieldset class="row ">
						<div class="btn-container">
							<button type="submit" class="btn btn-primary login-button">Войти</button>
							<button type="button" class="btn btn-success demo-button" (click)="routeTo('/projects')">Посмотреть демо</button>
						</div>
					</fieldset>
				</form>
			</div>
		</div>`
})
export class StartScreenComponent implements OnInit {
	private myForm: FormGroup;

    constructor(private router: Router) { }

	ngOnInit() {
		this.myForm = new FormGroup({
			login: new FormControl('', Validators.required),
			password: new FormControl('', Validators.required)
		});
	}

	private routeTo(url: string) {
		this.router.navigate([url]);
	}
}