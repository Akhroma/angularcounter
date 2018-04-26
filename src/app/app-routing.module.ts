import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component'
import { Routes, RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { ProgressbarComponent } from './progressbar/progressbar.component'


let routes : Routes = [

  { path:'home', component: HomeComponent },
  { path: 'home/slider', component: SliderComponent},
  {path: 'home/progressbar', component: ProgressbarComponent}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    SliderComponent,
    ProgressbarComponent
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
