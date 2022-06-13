import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-outputs',
  templateUrl: './outputs.component.html',
  styleUrls: ['./outputs.component.css']
})
export class OutputsComponent {

  nombres:Array<string>=["Julian","Camila","Fabiola","Pedro"]
  edades:Array<number>=[19,20,19,43]
  @Output() canalNombres = new EventEmitter<Array<string>>()
  @Output() canalEdades = new EventEmitter<Array<number>>()

  enviarNombres_Edades(){
    this.canalNombres.emit(this.nombres)
    this.canalEdades.emit(this.edades)
    }
    
}

