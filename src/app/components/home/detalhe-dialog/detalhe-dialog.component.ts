import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NotaMicrosul} from "../models/nota-microsul-model";
import {DatePipe} from "@angular/common";
import {MatDivider} from "@angular/material/divider";

@Component({
    selector: 'app-detalhe-dialog',
    standalone: true,
    imports: [
        DatePipe,
        MatDivider
    ],
    templateUrl: './detalhe-dialog.component.html',
    styleUrl: './detalhe-dialog.component.scss'
})
export class DetalheDialogComponent {

    constructor(@Inject(MAT_DIALOG_DATA) public data: NotaMicrosul) {
    }

}
