import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DatabaseService } from "@app/database.service";

@Component({
  selector: "app-designationlist",
  templateUrl: "./designationlist.component.html",
  
})

export class DesignationlistComponent implements OnInit {
  data: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private hrmService: DatabaseService
  ) {

  }

  ngOnInit() {
    this.BindData();
  }


  BindData() {

    this.hrmService.getrecords('designation/GetAll', 'countrylist').subscribe((result: any) => {
      this.data = result;
    });
  }
  NewClick() {
    this.router.navigate(['./hrms/master/createdesig'], { queryParams: { Mode: 'create' } });
  }

  editgriddata(data, index) {
    //this.hrmService.getrecords('company/EditCompanyMasterById/'+data.Id, 'countrylist').subscribe((result: any) => {
    //  this.data = result; 
    this.router.navigate(['./hrms/master/createdesig'], { queryParams: { Mode: 'Edit', Id: data.sno } });
    // });

  }

  deletegriddata(data) {

    this.hrmService.deletedata("dept/Delete", data.sno)
      .subscribe(model => {
        if (model) {

          this.BindData();
          this.router.navigate(['./hrms/master/desiglist']);
        }
      });

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
