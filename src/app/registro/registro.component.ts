import { Component, EventEmitter, Output } from '@angular/core';
import { Registro } from '../interfaces/reg.interface';



@Component({
    selector: 'app-registro',
    templateUrl: 'registro.component.html'
})

export class RegistroComponent {

    reg: Registro = {
        nombre: '',
        apellido: '',
        email: '',
        dpi: ''
    }

    @Output() onNuevoRegistro: EventEmitter<Registro> = new EventEmitter();

    agregar(){
        if (this.reg.nombre.trim().length === 0) {
            return;
        }

        this.onNuevoRegistro.emit(this.reg);

    }

    reset(){

        this.reg = {
            nombre: '',
            apellido: '',
            email: '',
            dpi: ''
        }

        this.onNuevoRegistro.emit(this.reg);
    }
}