import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmsModuleComponent } from './cms-module.component';
import { CmsManageComponent } from './cms-manage/cms-manage.component';
import { CmsSettingsComponent } from './cms-settings/cms-settings.component';

const routes: Routes = [
  {
     path: '', 
     component: CmsModuleComponent,
     children:[
      {
        path: 'client',
        loadChildren: () =>
          import('./client-module/client-module.module').then(
            (m) => m.ClientModuleModule
          ),
      },
      {
        path:'manage',
        component:CmsManageComponent
      },
      {
        path:'settings',
        component:CmsSettingsComponent
      }
     ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CmsModuleRoutingModule {}
