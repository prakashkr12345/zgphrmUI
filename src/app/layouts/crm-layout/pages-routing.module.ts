import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CrmLayoutComponent} from './crm-layout.component';

const routes: Routes = [
  {
    path: '',
    component: CrmLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@app/content/pages/pages.module').then(m => m.PagesModule)
      },
      {
        path: 'home',
        loadChildren: () => import('@app/content/pages/pages.module').then(m => m.PagesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
