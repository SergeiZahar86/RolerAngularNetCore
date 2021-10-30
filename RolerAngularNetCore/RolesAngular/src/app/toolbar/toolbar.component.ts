import {Component, OnInit} from '@angular/core';
import {User} from "../models/user";
import {DataService} from "../services/data.service";
import {LogService} from "../services/log.service";
import {AuthService} from "../services/auth.service";
import {OAuthService} from "angular-oauth2-oidc";
import {JwksValidationHandler} from 'angular-oauth2-oidc-jwks';
import {authCodeFlowConfig} from "../sso.config";
import {delay} from "rxjs/operators";

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

	public isModalRegister: boolean = false;
	public isModalReactiveRegister: boolean = false;
	public name: string = "Sergei";
	public data: any;
	public password: string = "Password";
	public user: User = new User("", "");

	constructor(private logService: LogService,
				private dataService: DataService,
				private authService: AuthService,
				private oauthService: OAuthService) {
		this.configureSingleSignOn();
	}

	configureSingleSignOn() {
		this.oauthService.configure(authCodeFlowConfig);
		this.oauthService.tokenValidationHandler = new JwksValidationHandler();
		this.oauthService.loadDiscoveryDocumentAndTryLogin().then(r => r);
	}

	ngOnInit(): void {
		// this.data = this.dataService.getData();
		// console.log("this.data", this.data);
	}

	public Register(user: User) {
		this.logService.write("User - ", user.name);
		this.dataService.setUser(user).subscribe(
			(data: any) => {
				this.logService.write("data ", data);
			},
			error => this.logService.write("error ", error)
		);
	}

	// закрытие модального окна регистрации
	public CloseModalRegister(isClosed: boolean) {
		this.isModalRegister = isClosed;
	}


	private DEF_DELAY: number | undefined;

	sleep(ms: any) {
		return new Promise(resolve => setTimeout(resolve, ms || this.DEF_DELAY));
	}

	public GetData(){
		return new Promise(resolve => {
			this.data = this.dataService.getData();
			console.log("this.data", this.data);
			resolve(this.data);
		})
	}
	public async ShowModalRegister() {
		this.GetData().then((res)=>console.log("this.data111", res)).then(() => this.isModalRegister = true);
	}

	public ShowModalReactiveRegister() {
		this.isModalReactiveRegister = true;
	}

	public CloseModalReactiveRegister(isClosed: boolean) {
		this.isModalReactiveRegister = isClosed;
	}

	public LogIn() {
		this.oauthService.initImplicitFlow();
	}

	public LogOut() {
		this.oauthService.logOut();
	}
}
