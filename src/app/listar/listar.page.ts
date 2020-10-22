import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { AlertController } from '@ionic/angular' ;

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

    textoApresentacao = "Texto Qualquer";
    arrDocinhos = [];

  constructor(public alertController: AlertController) {



  }

  ngOnInit() {
    this.textoApresentacao = "Novo texto";

    this.arrDocinhos.push({
      id: '01',
      nome: 'Brigadeiro'
    })
    this.arrDocinhos.push({
      id: '02',
      nome: 'Beijinho'
    })
    this.arrDocinhos.push({
      id: '03',
      nome: 'sorvete'
    })
  }

  async excluirDocinho(id){
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
            this.arrDocinhos.splice(id,1),
            
            this.textoApresentacao = "EXCLUIDO"


            
          }

        }


      ]


    })
    await alert.present();
    
  }
}
