import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaComponent } from './empresa/empresa.component';
import { HomeComponent } from './home/home.component';
import { PersonaComponent } from './persona/persona.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"empresa",component:EmpresaComponent},
  {path:"persona",component:PersonaComponent},
  {path:"",component:HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
