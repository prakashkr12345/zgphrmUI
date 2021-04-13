import { Component, OnInit } from "@angular/core";
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { DatabaseService } from "@app/database.service";
declare let swal: any;

@Component({
  selector: "app-companylist",
  templateUrl: "./companylist.component.html",
 
})

export class CompanylistComponent implements OnInit {
  data:any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private hrmService:DatabaseService
  ) { 

  }

  ngOnInit() {
this.BindData();
  }


  BindData()
  {
    
    this.hrmService.getrecords('company/GetAll', 'countrylist').subscribe((result: any) => {
      this.data = result; 
  });
  }
  NewClick()
  {
    this.router.navigate(['./hrms/master/createcompany'], { queryParams: { Mode: 'create' } });
  }

  editgriddata(data, index) {
    // this.hrmService.getrecords('company/EditCompanyMasterById/'+data.Id, 'countrylist').subscribe((result: any) => {
    //     this.data = result; 
        this.router.navigate(['./hrms/master/createcompany'],{ queryParams: { Mode: 'Edit',Id:data.Id } });
    //});
    
  }

  deletegriddata(data) {

    this.hrmService.deletedata("company/Delete", data.Id)
              .subscribe(model => {
                if (model) {
                 
                  this.BindData();
                  this.router.navigate(['./hrms/company/companylist']);
                }
               } );

    // swal({
    //   title: "Purchase Indent Details",
    //   text: "Are you sure want to delete",
    //   type: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Ok',
    //   confirm: true
    // }).then(() => {
    //   this.data.splice(index, 1);
    // })
  }

}
