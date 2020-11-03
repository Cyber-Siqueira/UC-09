import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Docinhos } from '../interfaces/docinhos';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public ngStore: AngularFirestore) { }

  getDocinhosList(){
    const docinhoRef = this.ngStore.collection("docinhos");
    return docinhoRef;
  }

  setDocinho(docinho){
    const docinhoData: Docinhos = {
      nome: docinho.nome,
      sabor: docinho.sabor,
      peso: docinho.peso,
      tipo: docinho.tipo
    }
    return this.ngStore.collection("Docinhos").add(docinhoData);
  }

  updateDocinho(uid, docinho){
    const docinhoData: Docinhos = {
      nome: docinho.nome,
      sabor: docinho.sabor,
      peso: docinho.peso,
      tipo: docinho.tipo
    }
    const docinhoRef: AngularFirestoreDocument<any> = this.ngStore.doc("Docinhos/"+uid)
  }
}
