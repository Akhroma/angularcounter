import { Component, OnInit, Input, Output, Injectable, OnChanges, ViewChild } from '@angular/core';
import { EventEmitter } from 'events';
import { Form } from '@angular/forms'
import { DatatransferService } from '../datatransfer.service'



@Component({
  selector: 'app-selectboxes',
  templateUrl: './selectboxes.component.html',
  styleUrls: ['./selectboxes.component.css']
})









export class SelectboxesComponent implements OnInit {












  datatransfer: DatatransferService

  @Input() valorHora = 100
  valor: number = 200

     

    constructor() {
      this.datatransfer = new DatatransferService()

    }

  atualizar() {
    console.log(this.val)
    this.valor = this.valorHora    
    return this.valor
  }

  val = this.atualizar()



ngOnInit() {

  console.log(this.valorHora)
}












  public options2 = [
  { ss: 'valorssss' },
  { ss: '445' },
  { ss: '455' },
  { ss: '4545' },
  { ss: '44444' },
  { ss: '55' },
]
}








