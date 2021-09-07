import { Component, Input } from '@angular/core';
import { Registro } from '../interfaces/reg.interface';

@Component({
    selector: 'app-resultado',
    templateUrl: 'resultado.component.html'
})

export class ResultadoComponent {

    @Input() resultado: Registro = {
        nombre: '',
        apellido: '',
        email: '',
        dpi: ''
    };

}