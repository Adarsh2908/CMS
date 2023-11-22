import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/entry-module/entry-module.module').then(
        (m) => m.EntryModuleModule
      ),
  },
  {
    path: 'cms',
    loadChildren: () =>
      import('./modules/cms-module/cms-module.module').then(
        (m) => m.CmsModuleModule
      ),
  },
  { path: 'website-builder', loadChildren: () => import('./modules/website-builder-module/website-builder-module.module').then(m => m.WebsiteBuilderModuleModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
