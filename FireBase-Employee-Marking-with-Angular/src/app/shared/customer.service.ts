import { Injectable } from '@angular/core';
import { FormControl,FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() {
  }
  
  form= new FormGroup({
    $key:new FormControl(null),
    fullName:new FormControl('',Validators.required),  
    email:new FormControl('',[Validators.required,Validators.email]),  
    mobile:new FormControl('',[Validators.required,Validators.minLength(8)]),  
    location:new FormControl('',Validators.required),  


  })
}
