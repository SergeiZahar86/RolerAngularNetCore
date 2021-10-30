import {Injectable} from '@angular/core';
import {LogService} from "./log.service";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {delay} from "rxjs/operators";

@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor(private logService: LogService,
				private http: HttpClient) {
	}

	private data: string[] = ["Apple iPhone XR", "Samsung Galaxy S9", "Nokia 9"];

	public GetListTime(userId: string) {
		const id = {userId: userId};
		return this.http.post('https://localhost:7001/api/getlisttime', id);
	}

	public setUser(user: User) {
		const body = {name: user.name, password: user.password};
		return this.http.post('https://localhost:7001/api/setempl', body);
	}

	public getData(): string[] {
		// await new Promise(f => setTimeout(f, 1000));
		// setTimeout(() => {
		// 	this.logService.write("операция получения данных");
		// await delay(3000);
			return this.data;
		//
		// }, 3000);
	}

	public addData(name: string) {
		this.logService.write("операция добавления данных");
		this.data.push(name);
	}
}
