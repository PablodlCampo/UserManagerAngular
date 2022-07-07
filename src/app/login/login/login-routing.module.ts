import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LoginComponent } from './login.component';

const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(loginRoutes)
    ]
})
export class LoginRoutingModule { }
