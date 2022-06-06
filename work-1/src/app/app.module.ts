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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PantallaUnoComponent,
    PantallaDOSComponent,
    PantallaTresComponent,
    HomeComponent,
    EmpresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
