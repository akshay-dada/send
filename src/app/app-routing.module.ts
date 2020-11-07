import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';


const custom_routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"aboutpage",component:AboutComponent},
  {path:"contactpage",component:ContactusComponent},
];

@NgModule({
  declarations:[
    AboutusComponent,
    ContactusComponent,
  ],
  imports: [RouterModule.forRoot(custom_routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
