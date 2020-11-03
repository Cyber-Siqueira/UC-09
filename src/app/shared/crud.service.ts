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
  }
}
