import {Component, OnInit, ElementRef, AfterViewInit} from '@angular/core';
import {FormGroup, FormControl, Validators}   from '@angular/forms';

@Component({
	selector: 'add-initiative',
	template: `
	<custom-header></custom-header>
	<form class="content-form" [formGroup]="myForm"> 
	        <fieldset class="row">
                <label>Название проекта</label>
                <input type="text" class="form-control"/>
            </fieldset>
            <fieldset class="row">
                <label>Тема проекта</label>
                <input type="text" class="form-control"/>
            </fieldset>
            <fieldset class="row">
                <label>Ожидаемые сроки завершения работ</label>
                <input type="text" class="form-control"/>
            </fieldset>
            <fieldset class="row">
                <label>Стратегическая цель</label>
                <textarea class="form-control"></textarea>
            </fieldset>
            <fieldset class="row">
                <label>Оперативные цели</label>
                <textarea class="form-control"></textarea>
            </fieldset>
            <fieldset class="row">
                <label>Обоснование целесообразности проекта</label>
                <textarea class="form-control"></textarea>
            </fieldset>
            <fieldset class="row">
                <label>Ожидаемые результаты</label>
                <textarea class="form-control"></textarea>
            </fieldset>
            <fieldset class="row">
                <label>Продукт проекта, его структура</label>
                <textarea class="form-control"></textarea>
            </fieldset>
            <fieldset class="row">
                <label>Основные этапы проекта</label>
                <textarea class="form-control"></textarea>
            </fieldset>
            <fieldset class="row">
                <label>Изображение для проекта</label>
                <br/>
                <button class="btn btn-primary" type="button" (click)="onClick($event)">Загрузить изображение <b>+</b></button>
                <span class="file-name" *ngIf="!!file">{{file.name}}</span>
                <input type="file" accept="image" id="selectedFile" class="file-input" #downloadInput (change)="onFileSelect($event)"/>
            </fieldset>
            <fieldset class="row">
                <label>Требуемые пакеты документов</label>
                <select multiple class="form-control">
                    <optgroup>
                        <option class="documents-small">Пакет документов для экологического коммитета</option>
                        <option class="documents-small">Пакет документов для транспортного комминтета</option>
                        <option class="documents-small">Пакет документов для министерства благоустройства города</option>
                    </optgroup>
                </select>
            </fieldset>
            <hr/>
            <fieldset class="row">
                <button class="btn btn-success">Добавить проект на портал</button>
            </fieldset>
        </form>
`
})
export class AddInitiativeComponent implements OnInit {
	private file:File;
	private myForm:FormGroup;

	ngOnInit() {
		this.myForm = new FormGroup({
			///
		});
	}

	onClick(event:MouseEvent) {
		document.getElementById('selectedFile').click();
	}

	onFileSelect(fileInput:any) {
		let FileList:FileList = fileInput.target.files;

		for (let i = 0, length = FileList.length; i < length; i++) {
			this.file = FileList.item(i);
		}
		console.log(this.file);
	}

	uploadFile(value) {
		return new Promise((resolve, reject) => {
			let formData:FormData = new FormData(),
				xhr:XMLHttpRequest = new XMLHttpRequest();
			formData.append("pic", this.file, this.file.name);
			xhr.onreadystatechange = () => {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						resolve(JSON.parse(xhr.response));
					} else {
						reject(xhr.response);
					}
				}
			};

			xhr.open('POST', `http://localhost:8000/api/initiatives/`, true);
			xhr.send(formData);
		});
	}
}