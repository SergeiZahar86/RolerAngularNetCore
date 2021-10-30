import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../models/user";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
	selector: 'app-reactive-register-modal',
	templateUrl: './reactive-register-modal.component.html',
	styleUrls: ['./reactive-register-modal.component.scss']
})
export class ReactiveRegisterModalComponent implements OnInit {
	// декоратор для выходного свойства
	@Output() isClosed: EventEmitter<boolean> = new EventEmitter<boolean>();
	@Output() isRegister: EventEmitter<User> = new EventEmitter<User>();

	// декоратор для установления значения переменной извне
	@Input() userName: string = "";
	@Input() userPassword: string = "";
	myForm: FormGroup;

	constructor(private formBuilder: FormBuilder) {
		this.myForm = formBuilder.group({

			"userName": new FormControl("Alise", [
				Validators.required,
				Validators.pattern("[a-zA-Z]{4,}"),
				this.userNameValidator
			]),
			"userPassword": new FormControl("123qwe", [
				Validators.required,
				Validators.pattern("[a-zA-Z0-9]{4,}")
			]),
		});
	}

	// валидатор
	userNameValidator(control: FormControl): {[s:string]:boolean}|null{

		if(control.value==="hello"){
			return {"userName": true};
		}
		return null;
	}
	ngOnInit(): void {
	}

	public CloseMolal() {
		this.isClosed.emit(false);
	}

	public RegisterMolal() {
		let user: User = new User(this.userName, this.userPassword);
		console.log("userObject ", user);
		console.log("myForm: ",this.myForm.value.userName);

		this.isRegister.emit(user);
		this.isClosed.emit(false);
	}

	submit() {
		console.log("myForm: ",this.myForm);
	}
}
