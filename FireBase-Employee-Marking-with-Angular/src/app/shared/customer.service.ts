import { Injectable } from '@angular/core';
import { FormControl,FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() {
  }
  
  form= new FormGroup({
    $key:new FormControl(null),
    fullName:new FormControl(''),  
    email:new FormControl(''),  
    mobile:new FormControl(''),  
    location:new FormControl(''),  


  })
}
