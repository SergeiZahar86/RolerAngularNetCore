import { Injectable } from '@angular/core';
import {LogService} from "./log.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private logService: LogService,
              private http: HttpClient) { }

  public GetAuth(): boolean{
    return true;
  }
  public LogIn(){

  }

}
