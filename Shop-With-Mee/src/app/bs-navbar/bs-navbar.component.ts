
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import *as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

user$:Observable<firebase.User>;

  constructor(private afA:AngularFireAuth) { 

    this.user$=afA.authState;
  // afA.authState.subscribe(user=>this.user=user);
  afA.authState.subscribe(x=>console.log(x));
  }

  ngOnInit() {
  }
  logout(){
    this.afA.auth.signOut();
  }

}
