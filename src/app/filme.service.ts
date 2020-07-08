import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // importado
import { Observable } from 'rxjs'; // importado
import { Filme } from "./filme"; // IMPORTADO

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  private baseUrl = 'http://localhost:8080/filme'; // link API

  constructor(private http: HttpClient) { }

  // METODOS PARA COMUNICAR COM A API

  listarFilme(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  cadastrarFilme(filme: Filme): Observable<Filme> {
    return this.http.post<Filme>(`${this.baseUrl}`, filme);
  }

  atualizarFilme(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletarFilme(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`); //{ responseType: 'text' });
  }

  listarTodosFilmes(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
    //return this.http.get<Filme[]>(`${this.baseUrl}`);
  }
}
