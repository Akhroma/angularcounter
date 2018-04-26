import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SuiModule } from 'ng2-semantic-ui'
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { SliderComponent } from './slider/slider.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { InputboxesComponent } from './inputboxes/inputboxes.component';
import { SelectboxesComponent } from './selectboxes/selectboxes.component';
import { DatatransferService } from './datatransfer.service';


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    ProgressbarComponent,
    InputboxesComponent,
    SelectboxesComponent,
    
  ],
  imports: [
    BrowserModule,
    SuiModule,
    FormsModule,
 
  ],
  providers: [
      DatatransferService,
      SelectboxesComponent
  ],
  exports:[
    RouterModule,
    SelectboxesComponent,
    ProgressbarComponent,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
