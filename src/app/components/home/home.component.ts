import {Component, OnInit} from '@angular/core';
import {HomeService} from "./services/home.service";
import {NotaMicrosul} from "./models/nota-microsul-model";
import {DatePipe, NgForOf} from "@angular/common";
import {
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    MatTableDataSource
} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {RouterLink} from "@angular/router";
import {MatIconButton} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {DetalheDialogComponent} from "./detalhe-dialog/detalhe-dialog.component";
import {EdicaoDialogComponent} from "./edicao-dialog/edicao-dialog.component";
import {NotaService} from "../nova-nota/nota.service";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        NgForOf,
        MatTable,
        MatColumnDef,
        MatHeaderCell,
        MatHeaderCellDef,
        MatCell,
        MatCellDef,
        MatHeaderRow,
        MatHeaderRowDef,
        MatRow,
        MatRowDef,
        DatePipe,
        MatIcon,
        MatMenuTrigger,
        MatMenu,
        RouterLink,
        MatIconButton,
        MatMenuItem
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

    // para conseguir construir uma tabela através do angular material
    notasTabela: MatTableDataSource<NotaMicrosul> = new MatTableDataSource<NotaMicrosul>();
    colunas = ['data' , 'numero', 'tipoItem', 'qtde', 'notadevolucao', 'opcoes'];

    constructor(private homeService: HomeService,
                private notaService: NotaService,
                private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.homeService.buscaNotas().subscribe({
            next: (value) => {
                this.notasTabela.data = value;
            }
        });
    }

    abreDetalhes(nota: NotaMicrosul): void {
        this.dialog.open(DetalheDialogComponent, {
            data: nota,
            width: '400px',
            height: '200px',
            disableClose: false
        });
    }

    deleteNota(nota: NotaMicrosul): void {
        this.notaService.deleteNota(nota).subscribe({
            next: () : void => {
                this.notasTabela.data = [];
                this.homeService.buscaNotas().subscribe({
                    next: (value) => {
                        this.notasTabela.data = value;
                    }
                });
            }
        });
    }

    editarNota(nota: NotaMicrosul): void {
        const dialogRef = this.dialog.open(EdicaoDialogComponent, {
            data: nota,
            width: '500px',
            height: '250px',
            disableClose: true
        });

        dialogRef.afterClosed().subscribe({
            next: (result) => {
                if (result != 'cancelado' && result != '') {
                    const notaSalvar: NotaMicrosul = {
                        numeronf: nota.numeronf,
                        data: nota.data,
                        quantidade: nota.quantidade,
                        tipoItem: nota.tipoItem,
                        notaDevolucao: result
                    }
                    this.notaService.devolucao(notaSalvar).subscribe({
                        next: (result) => {
                            this.notasTabela.data = [];
                            this.homeService.buscaNotas().subscribe({
                                next: (value) => {
                                    this.notasTabela.data = value;
                                }
                            });
                        }
                    });
                }
            }
        });
    }


}
