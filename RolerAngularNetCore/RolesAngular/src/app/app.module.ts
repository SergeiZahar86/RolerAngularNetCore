import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainPageComponent} from './main-page/main-page.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ToolbarComponent} from './toolbar/toolbar.component';
import {RouterModule} from "@angular/router";
import {TimesComponent} from './times/times.component';
import {RegisterModalComponent} from './toolbar/register-modal/register-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DataModule} from "./data/data.module";
import {BoldDirective} from './toolbar/bold.directive';
import {ReactiveRegisterModalComponent} from './toolbar/reactive-register-modal/reactive-register-modal.component';
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthGuard} from "./services/auth.guard";
import {OAuthModule} from "angular-oauth2-oidc";
import { CallbackComponent } from './callback/callback.component';
import { LoginComponent } from './login/login.component';


// const routes = [
// 	{path: '', component: MainPageComponent},
// 	{path: 'times', component: TimesComponent, canActivate: [AuthGuard]},
// 	{path: '**', component: NotFoundComponent}
// ]


@NgModule({
	// массив классов представлений ( компоненты, директивы, каналы (pipes) )
	declarations: [
		AppComponent,
		MainPageComponent,
		ToolbarComponent,
		TimesComponent,
		RegisterModalComponent,
		BoldDirective,
		ReactiveRegisterModalComponent,
		NotFoundComponent,
  CallbackComponent,
  LoginComponent
	],
	// массив других модулей, классы которых необходимы для шаблонов компонентов из текущего модуля
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		// RouterModule.forRoot(routes),
		MatDialogModule,
		MatInputModule,
		FormsModule,
		DataModule,
		ReactiveFormsModule,
		HttpClientModule,
		MatTableModule,
		OAuthModule.forRoot()
	],
	// классы, создающие сервисы, используемые модулем
	providers: [
		HttpClientModule,
		AuthGuard],
	// корневой компонент, который вызывается по умолчанию при загрузке приложения
	bootstrap: [AppComponent]
})
export class AppModule {
}
