import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { Router } from '@angular/router'
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string='';
  password: string='';
  
  constructor(private routerService: Router, private accService: AccountService) { }
  
  clear(){
    this.username='';
    this.password='';
  }
  
  onLogin(formGroup:FormGroup){
    if(formGroup.valid){
      this.accService.validateCredential(this.username,this.password).subscribe(
        (result)=>{
          console.log(result);
          if(result){
            this.routerService.navigate(['/cards-dashboard', this.username]);
          }
        },
        (error)=>{console.log(error)},
        ()=>{console.log("Request Completed")}
      );
  
    }
    else{
      console.log(formGroup);
    }
  }

  ngOnInit(): void {
  }

}
