import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LogoModule } from '../logo/logo.module';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        LoginPageRoutingModule,
        LogoModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        FormsModule
    ],
})
export class LoginPageModule {}
