import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public ngFireAuth: AngularFireAuth) { }

  signIn(email, password){
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }
}
