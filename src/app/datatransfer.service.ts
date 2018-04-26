import { Injectable, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { SelectboxesComponent } from './selectboxes/selectboxes.component'
import { Subject } from 'rxjs/Subject';



@Injectable()
export class DatatransferService {

@Input()  valorHora


  constructor() { }

  atualizar() {

    let nw: any = new SelectboxesComponent().atualizar()
    return this.valorHora = nw

  }



}
































