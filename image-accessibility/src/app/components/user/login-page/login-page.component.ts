import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(
    public router: Router,
    public afAuth:AngularFireAuth
  ) {
    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        this.router.navigate(['/images'])
      }
    })
  }

}
