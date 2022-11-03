import { Directive, HostListener  } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app'

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {

  constructor(
    private router:Router,
    private afAuth:AngularFireAuth
  ) {

  }

  @HostListener('click')
  onclick() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

}
