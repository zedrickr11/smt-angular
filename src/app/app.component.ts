import { Component } from '@angular/core';

interface Registro {
  nombre: string,
  apellido: string,
  email: string,
  dpi: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  resultado: Registro = {
    nombre: '',
    apellido: '',
    email: '',
    dpi: ''
  }

  mostrarRegistro( res: Registro ){

    this.resultado = res;

  }

}
