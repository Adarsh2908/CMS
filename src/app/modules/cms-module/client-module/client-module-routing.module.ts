import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientModuleComponent } from './client-module.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ManageClientComponent } from './manage-client/manage-client.component';
import { UsersClientComponent } from './users-client/users-client.component';
import { ClientSettingsComponent } from './client-settings/client-settings.component';

const routes: Routes = [
  { 
    path: '', 
    component: ClientModuleComponent,
    children:[
      {
        path:'',
        component:ClientHomeComponent
      },
      {
        path:'home',
        component:ClientHomeComponent
      },
      {
        path:'create',
        component:CreateClientComponent
      },
      {
        path:'manage',
        component:ManageClientComponent
      },
      {
        path:'users',
        component:UsersClientComponent
      },
      {
        path:'settings',
        component:ClientSettingsComponent
      }
    ] 
  },
  { path: 'websiteBuilder', loadChildren: () => import('./website-builder/website-builder.module').then(m => m.WebsiteBuilderModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientModuleRoutingModule { }
