import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SelectboxesComponent } from '../selectboxes/selectboxes.component';
import { AppComponent } from '../app.component'
import { DatatransferService } from '../datatransfer.service'




@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {




  datatransfer: DatatransferService


  constructor() {
      
    this.datatransfer = new DatatransferService()


  }



  ngOnInit() {
    this.datas()
   
  }

  counterValue = 0;




  @Input() valorHora: number = 0
  @Input() valor: number = 0


  @Output()
  counterChange = new EventEmitter();



  set counter(value) {
    this.counterValue = value;
    this.counterChange.emit(this.counterValue);
  }


  get counter() {
    console.log(this.counterValue)
    return this.counterValue;

  }



  decrement() {
    this.counter -= 10;
    //console.log(this.counter+'Decrement')
  }

  increment() {
    this.counter += 10;
    // console.log(this.counter+'Increment')

  }


  datavar: any = 0
  datavar2: any = 0
  valorEarned: any = 0
  datavar5: number = 0

n

  // datavar: any = new Date().getSeconds()
  datas() {

    setInterval(() => {

      let valorHora:number  = new DatatransferService().atualizar()
      this.valorEarned = this.valorEarned + (valorHora / 60 / 60)
      this.datavar = new Date().getSeconds()
      this.datavar2 = new Date().getHours()
      console.log(this.valorHora)

      


      return (

        this.datavar,
        this.datavar2,
        this.valorEarned,
        this.valorHora

      )

    }, 1000);
  }

}









