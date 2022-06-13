import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-padre',
  templateUrl: './output-padre.component.html',
  styleUrls: ['./output-padre.component.css']
})
export class OutputPadreComponent {
  Nombresrecibidos:Array<string>=[""]

  Edadesrecibidas:Array<number>=[]

  recibirEdades(edades:Array<number>){
    this.Edadesrecibidas=edades
    }
  
  recibirNombres(nombres:Array<string>) {
    this.Nombresrecibidos=nombres
  }
}
