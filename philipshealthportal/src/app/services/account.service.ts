import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable()
export class AccountService{
    constructor(private http:HttpClient){

    }

    validateCredential(email:string, password:string){
        return this.http.post("https://localhost:5001/api/account/ValidateCredential", {"Email":email, "Password":password})
    }
}