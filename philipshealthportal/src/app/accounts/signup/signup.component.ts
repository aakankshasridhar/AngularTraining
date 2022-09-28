import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username: string='';
  password: string=''
  retypepassword: string='';
  email: string='';
  age: string='';
  gender: string='';
  genders: string[] = ['Male','Female']; 
  constructor() { }
  
  clear(){
    this.username = '';
    this.password = '';
    this.retypepassword = '';
    this.email = '';
    this.age = '';
    this.gender = '';
  }
  
  onSignUp(formGroup:FormGroup){
    if(formGroup.valid){
      console.log("Valid form");
    }
    else{
      console.log(formGroup);
    }
  }
  
  ngOnInit(): void {
  }

}
