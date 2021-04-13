import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "@app/database.service";
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpErrorResponse } from "@angular/common/http";



@Component({
  selector: "app-company",
  templateUrl: "./company.component.html",

})

export class CompanyComponent implements OnInit {

  model: any = {};
  mode: any;
  editId: any;
  data: any;
  headerText: any;
  obj: any = {};

  constructor(private hrmService: DatabaseService, private router: Router,
    private route: ActivatedRoute,) {

    this.route.queryParams.subscribe(params => {
      this.mode = params.Mode;
      this.editId = params.Id;
    });

  }

  ngOnInit() {

    if (this.mode == "Edit") {
      this.headerText = "Edit Company";
      this.EditCompanyMaster(this.editId)
    }
    else {
      this.headerText = "Create Company";
    }
  }

  EditCompanyMaster(id) {
    this.hrmService.getrecords('company/EditCompanyMasterById/' + id, 'countrylist').subscribe((result: any) => {
      this.data = result;
      this.model.code = result[0].code;
      this.model.company = result[0].name;
    });
  }

  ClearCtrls() {
    this.model.code = "";
    this.model.company = "";
  }

  SaveClick() {


    this.obj.objheader = {};
    this.obj.objheader.code=this.model.code;
    this.obj.objheader.name=this.model.company;
    this.obj.objheader.status="Active";
    this.obj.objheader.Id=this.editId;

    if(this.mode=="create")
    {
    this.hrmService.addData("company/Create",this.obj).subscribe(
      res => {
        // tslint:disable-next-line: triple-equals
        // if (res.statuscode === 200) {
        //   this.toastr.success(res.message);
        //   if (type === 'saveandnew') { this.clear(); this.ref.close('close'); }
        // }
        // else {
        //       this.dbo.showerrorresponseforactions(res);
        // }
        this.router.navigate(['./hrms/company/companylist']);
        
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error occured.');
        } else {
          console.log('Server-side error occured.');
        }
      });
    }
    else{

      this.hrmService.addData("company/Update",this.obj).subscribe(
        res => {
          // tslint:disable-next-line: triple-equals
          // if (res.statuscode === 200) {
          //   this.toastr.success(res.message);
          //   if (type === 'saveandnew') { this.clear(); this.ref.close('close'); }
          // }
          // else {
          //       this.dbo.showerrorresponseforactions(res);
          // }
          this.router.navigate(['./hrms/company/companylist']);
          
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('Client-side error occured.');
          } else {
            console.log('Server-side error occured.');
          }
        });

    }


  }
  CancelClick() {
    this.router.navigate(['./hrms/master/companylist']);
  }


}
