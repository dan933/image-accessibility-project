import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  constructor(
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  userMessage(message:string) {
    this.snackBar.open(message,undefined,{duration:5000})
  }

  authError() {
    this.snackBar.open('Please wait Authenticating..', 'Ok', {
      duration: 500
    });

    setTimeout(() => {
      this.router.navigate(['/login'])
    }, 500);

    return this.snackBar._openedSnackBarRef!
      .onAction()
      .pipe(
        tap(_ =>
          this.router.navigate(['/login'])
        )
      )
      .subscribe();
  }
}
