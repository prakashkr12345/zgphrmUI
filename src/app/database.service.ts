import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  //#region "Declarations"
  baseUrl = environment.baseUrl;
  //authUrl = environment.authUrl;
  
  
  public userData: any;
  public empcode: any;
  public token: any;
  //public empdetails: Logindatamodel;
  //#endregion
  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) {
  }
  //#region "Commonfunctions"
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
    
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }
  //#endregion
   // sync data
  // syncdata(path): Observable<any> {
  //   this.empdetails = JSON.parse(localStorage.getItem('empdetails'));
  //   this.empcode = this.empdetails.empcode;
  //   this.token = 'Bearer ' + this.empdetails.access_token;
  //   return this.http.post(this.baseUrl + path, { empcode: this.empcode }, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.token }) });
  // }

  // get datatable
  getrecords(path, type): Observable<any>{
     // this.empdetails = JSON.parse(localStorage.getItem('empdetails'));
     this.empcode = 123;//this.empdetails.empcode;
      this.token =12345;//this.empdetails.access_token;
      return this.http.post(this.baseUrl + path, { type, empcode: this.empcode,accesstoken:this.token}, { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) });
  }
  // getrecordswithvalue(path, type, data): Observable<any> {
  //   //this.empdetails = JSON.parse(localStorage.getItem('empdetails'));
  //   this.empcode = this.empdetails.empcode;
  //   this.token = this.empdetails.access_token;
  //   return this.http.post(this.baseUrl + path, { type, empcode: this.empcode, data ,accesstoken:this.token}, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  // }
  // getfileurl(path, formData: FormData): Observable<any> {
  //   this.token = this.empdetails.access_token;
  //   this.empcode = this.empdetails.empcode;
  //     formData.append('accesstoken', this.token);
  //   formData.append('empcode', this.empcode);
  //   return this.http.post(this.baseUrl + path, formData 
  //   );
  // }
  // getstate(path, type, cid): Observable<any> {
  //   this.empdetails = JSON.parse(localStorage.getItem('empdetails'));
  //   this.empcode = this.empdetails.empcode;
  //   this.token = this.empdetails.access_token;
  //   return this.http.post(this.baseUrl + path, { type, empcode: this.empcode,accesstoken:this.token,countryid:cid}, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  // }
  // add,update,delete
  performactions(data, path, actiontype): Observable<any>{
    //this.empdetails = JSON.parse(localStorage.getItem('empdetails'));
    this.empcode = "123";//this.empdetails.empcode;
    this.token = "123";//this.empdetails.access_token;
    return this.http.post(this.baseUrl + path, { data}, {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json' })
    });
  }


  addData(apiUrl:any, model:any) 
  {
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json; charset=utf-8');

    if(model.id !="" && model.id!= undefined)
    {
       let idx=model.id;
        return this.http.put(this.baseUrl+apiUrl,model, {headers:headers});
    }
    else
    {
        return this.http.post(this.baseUrl+apiUrl ,model, {headers:headers});
    }
  }


  deletedata(apiUrl:any, idx:any)
  {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    let params = '';
    let options = new RequestOptions({
      // Have to make a URLSearchParams with a query string
      params: new URLSearchParams()
    });

    //alert(apiUrl);
    return this.http.post(this.baseUrl+apiUrl +"/"+ idx , options,{headers: headers});
  }

  // salesgetrecordswithvalue(path, type, data): Observable<any> {
  //   this.empdetails = JSON.parse(localStorage.getItem('empdetails'));
  //   this.empcode = this.empdetails.empcode;
  //   this.token = this.empdetails.access_token;
  //   return this.http.post(this.salesbaseUrl + path, data, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  // }
  // saleperformactions(data, table, path, actiontype): Observable<any>{
  //   this.empdetails = JSON.parse(localStorage.getItem('empdetails'));
  //   this.empcode = this.empdetails.empcode;
  //   this.token = this.empdetails.access_token;
  //   return this.http.post(this.salesbaseUrl, data, {
  //     headers: new HttpHeaders(
  //       { 'Content-Type': 'application/json' })
  //   });
  // }
  // // uploadleads
  // UploadExcel(file: File) {
  //   this.empdetails = JSON.parse(localStorage.getItem('empdetails'));
  //   this.empcode = this.empdetails.empcode;
  //   let accesstoken = this.empdetails.access_token;
  //   this.token = 'Bearer ' + this.empdetails.access_token;
  //   const formData: FormData = new FormData();
  //   formData.append('file', file);
  //   formData.append('empcode', this.empcode);
  //   formData.append('accesstoken', accesstoken);    
  //   return this.http.post(this.baseUrl + "uploadleads", formData, {
  //     headers: new HttpHeaders(
  //       {'Authorization': this.token})
  //   });
  // }
  // getleadoptionist(data): Observable<any> {
  //   // tslint:disable-next-line: object-literal-key-quotes
  //   // tslint:disable-next-line: no-string-literal
  //   this.empdetails = JSON.parse(localStorage.getItem('empdetails'));
  //   const empcode = this.empdetails.empcode;
  //   const token = 'Bearer ' + this.empdetails.access_token;
  //   return this.http.post(this.baseUrl + 'crm/getleadoptionlist', { data , empcode: this.empcode}, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token }) });
  // }
  // navigatetologin(): void
  // {
  //   localStorage.removeItem('logstatus');
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('empcode');
  //   localStorage.removeItem('empdetails');
  //   alert('Invalid Token Authentication.Please Login again');
  //   this.router.navigate(['/login']);
  // }
  //  logout(url): void {
  //   this.clearlocalstorage();
  //   window.location.assign(url);
  //  }
  //  clearlocalstorage(): void
  // {
  //   localStorage.removeItem('logstatus');
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('empcode');
  //   localStorage.removeItem('empdetails');
  //   localStorage.clear();
  //  }
  //  catchhttperror(error): void {
   
  //   if (error.error instanceof Error) {
  //     console.log('Client-side error occured.');
  //   } else {
  //     console.log('Server-side error occured.' + error.message + error.error);
  //   }
  //   if (error.status === 401) {
  //     this.toastr.warning('Session Expired.Please login again');
  //       this.clearlocalstorage();
  //     this.router.navigate(['/login']);
  //   }
  //   else if (error.status === 500) {
  //     this.toastr.warning('Invalid');
  //   }
  //   else if (error.status === 403) {
  //     this.toastr.warning('Invalid');
  //   }
  //   else
  //   {
  //   this.toastr.warning('No Records Found.');
  //   }
  // }
  // catcherror(error): void{
  //   console.log(error);
  // }

  // showerrorresponse(code):void
  // {
  //   if (code == 204)
  //   {
  //     this.toastr.warning('Session Expired.Please login again');
  //     this.clearlocalstorage();
  //      this.router.navigate(['/login']);
  //   }
  //   else if (code == 409)
  //   {
  //    //  this.toastr.warning('No Data');
  //   }
  //   else
  //   { this.toastr.warning('No Records Found.');
      
  //     }
  // }
  //  showerrorresponseforactions(res):void
  // {
  //   if (res.statuscode == 204)
  //   {
  //     this.toastr.warning('Session Expired.Please login again');
  //     this.clearlocalstorage();
  //      this.router.navigate(['/login']);
  //   }
  //   else if (res.statuscode == 409)
  //   {
  //      this.toastr.warning(res.message);
  //   }
  //   else
  //   { this.toastr.warning('No Records Found.');
      
  //     }
//}
}
