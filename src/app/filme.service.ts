import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; // importado
import { Observable, throwError } from 'rxjs'; // importado
import { Filme } from "./filme"; // IMPORTADO

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  private baseUrl = 'http://localhost:8080/filme'; // link API


  constructor(private http: HttpClient, private modalService: BsModalService) {}

  // METODOS PARA COMUNICAR COM A API

  listarFilme(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  cadastrarFilme(filme: Filme): Observable<Filme> {
    return this.http.post<Filme>(`${this.baseUrl}`, filme);
  }

  atualizarFilme(id: number, value: any): Observable<Filme> {
    return this.http.put<Filme>(`${this.baseUrl}/${id}`, value);
  }

  deletarFilme(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`); //{ responseType: 'text' });
  }

  listarTodosFilmes(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
    //return this.http.get<Filme[]>(`${this.baseUrl}`);
  }

  openModal(titulo: string, msg: string, msgBtnFechar?: string) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);

    bsModalRef.content.titulo = titulo;
    bsModalRef.content.msg = msg;
    bsModalRef.content.msgBtnFechar = "OK";

    if (msgBtnFechar){  // Verifica se a variavel msgBtnFechar tem conteudo, se tiver preenche
      bsModalRef.content.msgBtnFechar = msgBtnFechar;
    }
  }
}
