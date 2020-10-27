import { Component, OnInit } from '@angular/core';
import { errorMonitor } from 'events';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  logIn(email, password) {
    this.authService.signIn(email.value, password.value)
      .then((res) => {
        this.router.navigate(["listar"]);
      })
      .catch((error) => {
        let msg = "";
        switch (error.code) {
          case "auth/invalid-email":
            msg = "O endereço de e-mail está em um formato incorreto.";
          case "auth/user-not-found":
            msg = "O e-mail digitado não está associado a nenhum usuário";
          case "auth/wrong-password":
            msg = "Senha Incorreta";

        }
        window.alert(msg);
      })
  }

}
