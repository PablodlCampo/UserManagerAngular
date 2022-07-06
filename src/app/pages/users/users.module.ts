import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { CreateEditUserComponent } from './create-edit-user/create-edit-user.component';
import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from 'src/app/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UsersComponent,
    CreateEditUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class UsersModule { }
