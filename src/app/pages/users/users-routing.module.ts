import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { CreateEditUserComponent } from './create-edit-user/create-edit-user.component';
import { UsersComponent } from './users.component';

const loginRoutes: Routes = [
    { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
    { path: 'users/:id', component: CreateEditUserComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [
        RouterModule.forChild(loginRoutes)
    ]
})
export class UsersRoutingModule { }
