import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientModuleRoutingModule } from './client-module-routing.module';
import { ClientModuleComponent } from './client-module.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ManageClientComponent } from './manage-client/manage-client.component';
import { UsersClientComponent } from './users-client/users-client.component';
import { ClientSettingsComponent } from './client-settings/client-settings.component';


@NgModule({
  declarations: [
    ClientModuleComponent,
    CreateClientComponent,
    ClientHomeComponent,
    ManageClientComponent,
    UsersClientComponent,
    ClientSettingsComponent
  ],
  imports: [
    CommonModule,
    ClientModuleRoutingModule
  ]
})
export class ClientModuleModule { }
