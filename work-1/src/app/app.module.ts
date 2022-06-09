import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PantallaUnoComponent } from './pantalla-uno/pantalla-uno.component';
import { PantallaDOSComponent } from './pantalla-dos/pantalla-dos.component';
import { PantallaTresComponent } from './pantalla-tres/pantalla-tres.component';
import { HomeComponent } from './home/home.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { PersonaComponent } from './persona/persona.component';
import { PantallacuatroComponent } from './pantallacuatro/pantallacuatro.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { TarjetasHijosComponent } from './tarjetas-hijos/tarjetas-hijos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PantallaUnoComponent,
    PantallaDOSComponent,
    PantallaTresComponent,
    HomeComponent,
    EmpresaComponent,
    PersonaComponent,
    PantallacuatroComponent,
    TarjetasComponent,
    TarjetasHijosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
