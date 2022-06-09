import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetas-hijos',
  templateUrl: './tarjetas-hijos.component.html',
  styleUrls: ['./tarjetas-hijos.component.css']
})
export class TarjetasHijosComponent {
  @Input() imagen:string='assets/echidna.jpg';
  @Input() nombre:string='####'
}

