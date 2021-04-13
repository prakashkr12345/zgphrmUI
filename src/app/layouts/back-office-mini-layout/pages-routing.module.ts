// Angular
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BackOfficeMiniLayoutComponent} from './back-office-mini-layout.component';

const routes: Routes = [
  {
    path: '',
    component: BackOfficeMiniLayoutComponent,
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
