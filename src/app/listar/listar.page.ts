import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../shared/auth.service';
import { CrudService } from '../shared/crud.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  textoApresentacao = "Texto Qualquer";
  arrDocinhos = [];

  constructor(public alertController: AlertController, public AuthService: AuthService, public crudService: CrudService) {



  }

  ngOnInit() {
    this.textoApresentacao = this.AuthService.emailUser;

  }

  async excluirDocinho(id) {
    const alert = await this.alertController.create({
      header: "confirmar exclusão",
      message: "Tem certeza que deseja excluir?",
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'Secundary'
        },
        {


          text: "sim",
          handler: () => {
            this.arrDocinhos.splice(id, 1),

              this.textoApresentacao = "EXCLUIDO"



          }

        }


      ]


    })
    await alert.present();

  }
}
