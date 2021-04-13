import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {SharedModule} from '@gaxon/modules';

import {BlankComponent} from './blank/blank.component';

const appsRoutes: Routes = [
  {
    path: '',
    component: BlankComponent
  },
  {
    path: '**',
    component: BlankComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(appsRoutes)
  ],
  declarations: [
    BlankComponent
  ]
})
export class PagesModule {
}
