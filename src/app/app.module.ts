import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalsComponent } from './components/goals/goals.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './components/user/user.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddUserComponent } from './components/add-user/add-user.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AddGoalComponent } from './components/add-goal/add-goal.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { UpdateGoalComponent } from './components/update-goal/update-goal.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CardsComponent } from './components/cards/cards.component';
import { DatepipePipe } from './pipes/datepipe.pipe';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AboutComponent } from './components/about/about.component';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './components/upload/upload.component';
import { LoginComponent } from './components/login/login.component';
import { NewUserComponent } from './components/new-user/new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    GoalsComponent,
    CardsComponent,
    SidenavComponent,
    AddUserComponent,
    AddGoalComponent,
    UpdateGoalComponent,
    UpdateUserComponent,
    DatepipePipe,
    AboutComponent,
    UploadComponent,
    LoginComponent,
    NewUserComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,  
    HttpClientModule,
    MatProgressBarModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
