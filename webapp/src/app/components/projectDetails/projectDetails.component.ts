import { Component, OnInit } from '@angular/core';
import {Http, Headers, Response} from "@angular/http";

@Component({
	selector: 'main-page',
	template: `<h1>ProjectDetailsComponent</h1>`
})
export class ProjectDetailsComponent implements OnInit {

	constructor(private http: Http) { }

	ngOnInit() {
		// this.http.get('http://127.0.0.1:8000/users')
		// 	.map((res:Response) => res.json())
		// 	.toPromise()
		// 	.then((result) => {
		// 		this.data = result;
		// 	});
	}

}