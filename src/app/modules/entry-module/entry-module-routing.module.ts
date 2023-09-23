import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryModuleComponent } from './entry-module.component';

const routes: Routes = [{ path: '', component: EntryModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryModuleRoutingModule { }
