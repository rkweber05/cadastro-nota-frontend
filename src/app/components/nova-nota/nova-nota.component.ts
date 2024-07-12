import {Component} from '@angular/core';
import {NotaService} from "./nota.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatOption, MatSelect} from "@angular/material/select";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {NotaMicrosul} from "../home/models/nota-microsul-model";
import {Router} from "@angular/router";

@Component({
    selector: 'app-nova-nota',
    standalone: true,
    imports: [
        FormsModule,
        MatSelect,
        MatOption,
        ReactiveFormsModule,
        MatFormField,
        MatDatepickerInput,
        MatInput,
        MatInputModule,
        MatDatepickerToggle,
        MatDatepicker,
        MatButton
    ],
    templateUrl: './nova-nota.component.html',
    styleUrl: './nova-nota.component.scss'
})
export class NovaNotaComponent {

    formCadastro: FormGroup;

    constructor(private _notaService: NotaService,
                private _formBuilder: FormBuilder,
                private _router: Router) {
        this.formCadastro = this._formBuilder.group({
            dataEmissao: ['', Validators.required],
            numeroNf: ['', Validators.required],
            tipoItem: ['', Validators.required],
            qtde: ['', Validators.required],
            nfRetorno: ['']
        });
    }

    salvar() {
        const novaNota: NotaMicrosul = {
            numeronf: this.f['numeroNf'].value,
            data: this.f['dataEmissao'].value,
            tipoItem: this.f['tipoItem'].value,
            quantidade: this.f['qtde'].value,
            notaDevolucao: this.f['nfRetorno'].value
        }

        this._notaService.novaNota(novaNota).subscribe({
            next: (value) => {
                console.log(value);
                this._router.navigate(['/home']);
            }
        });
    }

    get f() {
        return this.formCadastro.controls;
    }
}
