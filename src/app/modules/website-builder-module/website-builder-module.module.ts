import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteBuilderModuleRoutingModule } from './website-builder-module-routing.module';
import { WebsiteBuilderModuleComponent } from './website-builder-module.component';


@NgModule({
  declarations: [
    WebsiteBuilderModuleComponent
  ],
  imports: [
    CommonModule,
    WebsiteBuilderModuleRoutingModule
  ]
})
export class WebsiteBuilderModuleModule { }
