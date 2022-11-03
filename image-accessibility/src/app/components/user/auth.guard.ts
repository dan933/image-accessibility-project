import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SnackService } from 'src/app/services/snack.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router:Router,
    private afAuth: AngularFireAuth,
    private snack:SnackService
  ) {

  }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean>{
    const user = await this.afAuth.currentUser;

    const isLoggedIn = !!user;

    if (!isLoggedIn) {
      this.snack.authError();

    }


    return isLoggedIn;

  }

}
