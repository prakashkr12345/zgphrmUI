import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DatabaseService } from "@app/database.service";

@Component({
  selector: "app-department",
  templateUrl: "./department.component.html",
  
})

export class DepartmentComponent implements OnInit {
  
  model: any = {};
  mode: any;
  editId: any;
  data: any;
  headerText: any;
  obj: any = {};
  companyList: Array<any> = [];

  webSite = [
    { Id: 1, Name: "Yes" },
  
    { Id: 2, Name: "No" },
  ]

attendance = [
  { Id: 1, Name: "Enabled" },
 
  { Id: 2, Name: "Disabled" },
 
]

  constructor(private hrmService: DatabaseService, private router: Router,
    private route: ActivatedRoute,) {

    this.route.queryParams.subscribe(params => {
      this.mode = params.Mode;
      this.editId = params.Id;
    });

  }

  ngOnInit() {
   //this. BindCompanyList()
    
    if (this.mode == "Edit") {
      this.headerText = "Edit Department";
      this.EditCompanyMaster(this.editId)
    }
    else {
      this.headerText = "Create Department";
    }
  }

  BindCompanyList()
  {
    this.hrmService.getrecords('branch/GetAllCompanylist', 'countrylist').subscribe((result: any) => {
      this.companyList = result;     
    });
  }

  EditCompanyMaster(id) {
    this.hrmService.getrecords('dept/EditDeptMasterById/' + id, 'countrylist').subscribe((result: any) => {
      this.data = result;
      this.model.company=  result[0].cid;
      this.model.code=  result[0].code;
      this.model.branch=  result[0].branchname;
      this.model.address=  result[0].address;
      this.model.district=  result[0].district;
      this.model.state=  result[0].state;
      this.model.pincode=  result[0].pincode;
      this.model.mobileno=  result[0].mobileno;
      this.model.landlineno=  result[0].lanline;
      this.model.email=  result[0].email;
    });
  }

  ClearCtrls() {
 
    this.model.company= "";
    this.model.code= "";
    this.model.branch= "";
    this.model.address= "";
    this.model.district= "";
    this.model.state= "";
    this.model.pincode= "";
    this.model.mobileno= "";
    this.model.landlineno= "";
    this.model.email= "";
  }

  SaveClick() {


    this.obj.objheader = {};
    this.obj.objheader.department=this.model.deptname;
    this.obj.objheader.webstatus=this.model.description;
    this.obj.objheader.descr=this.model.website;
    this.obj.objheader.position=this.model.attendancelst;
    this.obj.objheader.astatus="Enabled";
  


    if(this.mode=="create")
    {
    this.hrmService.addData("dept/Create",this.obj).subscribe(
      res => {
        // tslint:disable-next-line: triple-equals
        // if (res.statuscode === 200) {
        //   this.toastr.success(res.message);
        //   if (type === 'saveandnew') { this.clear(); this.ref.close('close'); }
        // }
        // else {
        //       this.dbo.showerrorresponseforactions(res);
        // }
        this.router.navigate(['./hrms/dept/deptlist']);
        
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

      this.hrmService.addData("dept/Update",this.obj).subscribe(
        res => {
          // tslint:disable-next-line: triple-equals
          // if (res.statuscode === 200) {
          //   this.toastr.success(res.message);
          //   if (type === 'saveandnew') { this.clear(); this.ref.close('close'); }
          // }
          // else {
          //       this.dbo.showerrorresponseforactions(res);
          // }
          this.router.navigate(['./hrms/dept/deptlist']);
          
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
    this.router.navigate(['./hrms/master/deptlist']);
  }

  onSelectWebsite(id)
  {

  }

  onSelectAttend(id)
  {

  }

}
