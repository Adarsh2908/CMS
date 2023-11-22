import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteBuilderModuleComponent } from './website-builder-module.component';

const routes: Routes = [{ path: '', component: WebsiteBuilderModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteBuilderModuleRoutingModule { }
