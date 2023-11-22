import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryModuleRoutingModule } from './entry-module-routing.module';
import { EntryModuleComponent } from './entry-module.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EntryHeaderComponent } from './entry-header/entry-header.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EntryModuleComponent,
    LoginComponent,
    RegisterComponent,
    EntryHeaderComponent
  ],
  imports: [
    CommonModule,
    EntryModuleRoutingModule,
    ReactiveFormsModule
  ]
})
export class EntryModuleModule { }
