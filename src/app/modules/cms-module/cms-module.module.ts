import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsModuleRoutingModule } from './cms-module-routing.module';
import { CmsModuleComponent } from './cms-module.component';
import { CmsSettingsComponent } from './cms-settings/cms-settings.component';
import { CmsManageComponent } from './cms-manage/cms-manage.component';


@NgModule({
  declarations: [
    CmsModuleComponent,
    CmsSettingsComponent,
    CmsManageComponent
  ],
  imports: [
    CommonModule,
    CmsModuleRoutingModule
  ]
})
export class CmsModuleModule { }
