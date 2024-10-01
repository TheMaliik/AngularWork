import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductComponent } from './Components/product/product.component';

const routes: Routes = [

  {path :"home" , component:HomeComponent},
  {path :"" , redirectTo:'/home' , pathMatch:"full"},
  {path :"products/:id" , component:ProductComponent},
  {path:"**" , component:NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
