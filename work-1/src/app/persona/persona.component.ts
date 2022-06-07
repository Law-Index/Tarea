import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  nombre:string="Julian Noguera"

  habilidades:Array<string>=["Creativo","Competitivo","Reaponsable","Trabajo en equipo"]
  lenguajes:Array<string>=["Html","Css","Javascript","Angular","Python"]
  
  verfoto:boolean=false

  aparecerfoto(){
    this.verfoto=!this.verfoto
  }
}
