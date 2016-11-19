import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from "@angular/http";

@Injectable()
export class DefaultService {

    constructor(private http: Http) { }

    private formHeaders() : RequestOptions {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		return new RequestOptions({ headers: headers });

	}

    public get<T>(url: string) {
    	return this.http.get<T>(url, this.formHeaders())
			.toPromise()
			.then((result) => {
				return this.jsonParse(result['_body']);
			});
	}

	private jsonParse(str: string) {
		return JSON.parse(str);
	}
}