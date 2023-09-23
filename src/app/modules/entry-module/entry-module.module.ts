import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryModuleRoutingModule } from './entry-module-routing.module';
import { EntryModuleComponent } from './entry-module.component';


@NgModule({
  declarations: [
    EntryModuleComponent
  ],
  imports: [
    CommonModule,
    EntryModuleRoutingModule
  ]
})
export class EntryModuleModule { }
