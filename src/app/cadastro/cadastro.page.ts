import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  cadastro(email, senha, nome, idade, profissao){
    const userData: Usuario = {
      nome: nome.value,
      idade: idade.value,
      profissao: profissao.value
    }
    this.authService.RegisterUser(email.value, senha.value, userData);
  }

}
