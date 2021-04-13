import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchesComponent } from './branches.component';
import { BranchlistComponent } from './branchlist.component';
import { CompanyComponent } from './company.component';
import { CompanylistComponent } from './companylist.component';
import { DepartmentComponent } from './department.component';
import { DepartmentlistComponent } from './departmentlist.component';
import { DesignationComponent } from './designation.component';
import { DesignationlistComponent } from './designationlist.component';

const routes: Routes = [    
    {
        path: 'companylist',
        component: CompanylistComponent
    },
    {
        path: 'branchlist',
        component: BranchlistComponent
    },
    {
        path: 'createcompany',
        component: CompanyComponent
    },
    {
        path: 'createbranch',
        component: BranchesComponent
    },
    {
        path: 'deptlist',
        component: DepartmentlistComponent
    },
    {
        path: 'createdept',
        component: DepartmentComponent
    },
    {
        path: 'desiglist',
        component: DesignationlistComponent
    },
    {
        path: 'createdesig',
        component: DesignationComponent
    },
    
];


// const routes: Routes = [
//     {
//       path: '',
//       component: CompanylistComponent,
//       children: [
//         {
//           path: '',
//           loadChildren: () => import('@app/content/pages/pages.module').then(m => m.PagesModule)
//         },
//         {
//           path: 'home',
//           loadChildren: () => import('@app/content/pages/pages.module').then(m => m.PagesModule)
//         }
//       ]
//     }
//   ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
