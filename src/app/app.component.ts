import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { DatatransferService } from './datatransfer.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatatransferService]
})
export class AppComponent {
  
  title = 'app'
  @Input() valorHora: any


  constructor() {
  
   }





  onMudouValor(evento) {

    console.log(evento)
  }





}

