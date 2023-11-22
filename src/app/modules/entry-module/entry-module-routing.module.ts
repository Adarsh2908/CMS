import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryModuleComponent } from './entry-module.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: EntryModuleComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntryModuleRoutingModule {}
