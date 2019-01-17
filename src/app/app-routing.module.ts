import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultspageComponent } from './resultspage/resultspage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';

const routes: Routes = [
  {path: '', component: SignuppageComponent},
  {path: 'resultspage', component: ResultspageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
