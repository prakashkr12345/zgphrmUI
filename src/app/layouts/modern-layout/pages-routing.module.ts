import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ModernLayoutComponent} from './modern-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ModernLayoutComponent,
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
