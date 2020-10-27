import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public ngFireAuth: AngularFireAuth, public router: Router) {
    this.ngFireAuth.authState.subscribe(user => {
      if (user) {
        localStorage.setItem("usuario", JSON.stringify(user))
        this.router.navigate(["listar"]);
      }
      else {
        localStorage.setItem("usuario", null);
      }
    });
  }

  get emailUser(): string{
    const user = JSON.parse(localStorage.getItem("usuario"));
    return user.email;
  }


  SignIn(email, password) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  SignOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem("usuario");
    });
  }
}
