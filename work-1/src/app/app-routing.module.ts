import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaComponent } from './empresa/empresa.component';
import { HomeComponent } from './home/home.component';
import { OutputPadreComponent } from './output-padre/output-padre.component';
import { PersonaComponent } from './persona/persona.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"empresa",component:EmpresaComponent},
  {path:"persona",component:PersonaComponent},
  {path:"tarjetas",component:TarjetasComponent},
  {path:"outputs",component:OutputPadreComponent},
  {path:"",component:HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
