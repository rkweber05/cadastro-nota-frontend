import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NotaMicrosul} from "../models/nota-microsul-model";

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    // passando para o construtor que ele pode acessar ao banco
    constructor(private http: HttpClient) {
    }

    public buscaNotas(): Observable<Array<NotaMicrosul>> {
        return this.http.get<Array<NotaMicrosul>>('http://localhost:8080/listar');
    }
}
