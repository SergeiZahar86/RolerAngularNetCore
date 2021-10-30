import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../models/user";

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {
  // декоратор для выходного свойства
  @Output() isClosed: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() isRegister: EventEmitter<User> = new EventEmitter<User>();

  // декоратор для установления значения переменной извне
  @Input() userName: string = "";
  @Input() userPassword: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public CloseMolal() {
    this.isClosed.emit(false);
  }
  public RegisterMolal() {
    let user: User = new User(this.userName, this.userPassword);
    console.log("userObject ",user);


    this.isRegister.emit(user);
    this.isClosed.emit(false);
  }

  public onNameChange() {
    if(this.userName=="hello")
      this.userName = "неизвестно";
  }
}
