import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteBuilderRoutingModule } from './website-builder-routing.module';
import { WebsiteBuilderComponent } from './website-builder.component';


@NgModule({
  declarations: [
    WebsiteBuilderComponent
  ],
  imports: [
    CommonModule,
    WebsiteBuilderRoutingModule
  ]
})
export class WebsiteBuilderModule { }
