import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddGoalComponent } from './components/add-goal/add-goal.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { CardsComponent } from './components/cards/cards.component';
import { GoalsComponent } from './components/goals/goals.component';
import { LoginComponent } from './components/login/login.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { UpdateGoalComponent } from './components/update-goal/update-goal.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UploadComponent } from './components/upload/upload.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'new-user', component: NewUserComponent},
  {path: 'home', component: CardsComponent},
  {path: 'new-user', component: NewUserComponent},
  {path: 'add-user', component: AddUserComponent},
  {path: 'add-goal', component: AddGoalComponent},
  {path: 'update-goal/:goalId', component: UpdateGoalComponent},
  {path: 'update-user/:userId', component: UpdateUserComponent},
  {path: 'upload-image', component: UploadComponent},
  {path: 'about', component: AboutComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
