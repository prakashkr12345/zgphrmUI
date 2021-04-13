import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IntranetLayoutComponent} from './intranet-layout.component';

const routes: Routes = [
  {
    path: '',
    component: IntranetLayoutComponent,
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
