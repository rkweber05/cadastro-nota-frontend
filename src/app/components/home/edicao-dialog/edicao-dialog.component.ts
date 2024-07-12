import {Component, ElementRef, Inject, ViewChild} from '@angular/core';
import {
    MAT_DIALOG_DATA,
    MatDialogActions, MatDialogClose,
    MatDialogContainer,
    MatDialogContent,
    MatDialogRef
} from "@angular/material/dialog";
import {NotaMicrosul} from "../models/nota-microsul-model";
import {MatFormField, MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
    selector: 'app-edicao-dialog',
    standalone: true,
    imports: [
        MatDialogContainer,
        MatDialogContent,
        MatDialogActions,
        MatInput,
        MatFormField,
        MatDialogClose,
        MatButton
    ],
    templateUrl: './edicao-dialog.component.html',
    styleUrl: './edicao-dialog.component.scss'
})
export class EdicaoDialogComponent {

    @ViewChild('notaDevolucao') inputNfDev: ElementRef | undefined;

    constructor(@Inject(MAT_DIALOG_DATA) public data: NotaMicrosul,
                private _dialogRef: MatDialogRef<EdicaoDialogComponent>) {
    }

    salvar(): void {
        this._dialogRef.close(this.inputNfDev?.nativeElement.value);
    }

}
