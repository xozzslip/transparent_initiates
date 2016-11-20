import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from "@angular/http";

@Injectable()
export class DefaultService {

	constructor(private http:Http) {
	}

	private formHeaders():RequestOptions {
		let headers = new Headers({'Content-Type': 'application/json'});
		return new RequestOptions({headers: headers});
	}

	private formTokenHeaders():RequestOptions {
		let headers = new Headers({'Content-Type': 'application/json', "X-CSRFToken": this.getCookie('csrftoken')});
		return new RequestOptions({headers: headers});
	}

	public get<T>(url:string) {
		return this.http.get<T>(url, this.formHeaders())
			.toPromise()
			.then((result) => {
				return this.jsonParse(result['_body']);
			});
	}

	public post<T>(url:string, body:any) {
		return this.http.post<T>(url, body, this.formTokenHeaders())
			.toPromise()
			.then((result) => {
				return this.jsonParse(result['_body']);
			});
	}

	private  getCookie(name: string) {
		var matches = document.cookie.match(new RegExp(
			"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
		));
		return matches ? decodeURIComponent(matches[1]) : undefined;
	}

	private jsonParse(str:string) {
		return JSON.parse(str);
	}
}