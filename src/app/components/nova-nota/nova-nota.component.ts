import { Component } from '@angular/core';
import { NotaService } from './nota.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NotaMicrosul } from '../home/models/nota-microsul-model';
import { Router } from '@angular/router';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-nova-nota',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ],
  templateUrl: './nova-nota.component.html',
  styleUrls: ['./nova-nota.component.scss']
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
