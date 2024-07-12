import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NotaMicrosul} from "../home/models/nota-microsul-model";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class NotaService {

    constructor(private _http: HttpClient) {
    }

    public novaNota(nota: NotaMicrosul): Observable<NotaMicrosul> {
        let headers = new HttpHeaders()
            .append('Content-Type', 'application/json');
        return this._http.put<NotaMicrosul>('http://localhost:8080/novo', JSON.stringify(nota), {headers: headers});
    }

    public devolucao(nota: NotaMicrosul): Observable<NotaMicrosul> {
        let headers = new HttpHeaders()
            .append('Content-Type', 'application/json');
        return this._http.post<NotaMicrosul>('http://localhost:8080/devolucao', JSON.stringify(nota), {headers: headers});
    }

    public deleteNota(nota: NotaMicrosul): Observable<any> {
        let headers = new HttpHeaders()
            .append('Content-Type', 'application/json');
        return this._http.post<any>('http://localhost:8080/delete', JSON.stringify(nota), {headers: headers});
    }
}
