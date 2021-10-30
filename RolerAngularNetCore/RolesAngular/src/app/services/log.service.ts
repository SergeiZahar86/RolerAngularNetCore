import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }
  write(logMessage:string, object?:Object){

    console.log(logMessage,object);
  }
}
