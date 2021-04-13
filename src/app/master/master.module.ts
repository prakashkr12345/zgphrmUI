
import { NgModule } from '@angular/core';
//import { DatabaseService } from '@app/database.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BranchesComponent } from './branches.component';
import { BranchlistComponent } from './branchlist.component';
import { CompanyComponent } from './company.component';
import { CompanylistComponent } from './companylist.component';
import { DepartmentComponent } from './department.component';
import { DepartmentlistComponent } from './departmentlist.component';
import { MasterRoutingModule } from './master-routing.module';
import { NgxDataTableModule} from 'angular-9-datatable'
import { DesignationlistComponent } from './designationlist.component';
import { DesignationComponent } from './designation.component';

import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { SharedModule } from '@gaxon/modules';

@NgModule({
    imports: [


        CommonModule,
        FormsModule,
        MasterRoutingModule,
        NgxDataTableModule,
        TableModule,
        InputTextModule,
        SharedModule

    ],
    declarations: [
        CompanylistComponent,
        CompanyComponent,
        BranchlistComponent,
        BranchesComponent,
        DepartmentlistComponent,
        DepartmentComponent,
        DesignationlistComponent,
        DesignationComponent

    ],

    providers: [
      //  DatabaseService
    ],
})

export class MasterModule {

}