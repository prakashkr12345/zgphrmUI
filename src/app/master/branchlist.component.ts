import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DatabaseService } from "@app/database.service";

@Component({
  selector: "app-branchlist",
  templateUrl: "./branchlist.component.html",

})

export class BranchlistComponent implements OnInit {

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

    this.hrmService.getrecords('branch/GetAll', 'countrylist').subscribe((result: any) => {
      this.data = result;
    });
  }
  NewClick() {
    this.router.navigate(['./hrms/master/createbranch'], { queryParams: { Mode: 'create' } });
  }

  editgriddata(data, index) {
    //this.hrmService.getrecords('company/EditCompanyMasterById/'+data.Id, 'countrylist').subscribe((result: any) => {
    //  this.data = result; 
    this.router.navigate(['./hrms/master/createbranch'], { queryParams: { Mode: 'Edit', Id: data.sno } });
    // });

  }

  deletegriddata(data) {

    this.hrmService.deletedata("branch/Delete", data.sno)
      .subscribe(model => {
        if (model) {

          this.BindData();
          this.router.navigate(['./hrms/master/branchlist']);
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
