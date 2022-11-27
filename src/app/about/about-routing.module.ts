import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'about',component: AboutComponent,
          children:[{ path:'contact', component: ContactComponent}]},
    ])
  ]
  ,exports:[
      RouterModule
  ]
})
export class AboutRoutingModule { }
