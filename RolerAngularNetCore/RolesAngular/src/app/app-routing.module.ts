import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {TimesComponent} from "./times/times.component";
import {AuthGuard} from "./services/auth.guard";
import {NotFoundComponent} from "./not-found/not-found.component";
import {CallbackComponent} from "./callback/callback.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  { path: 'login', component:LoginComponent, outlet:'popup'},
  {path: 'times', component: TimesComponent, canActivate: [AuthGuard]},
  {path: 'callback', component: CallbackComponent },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
