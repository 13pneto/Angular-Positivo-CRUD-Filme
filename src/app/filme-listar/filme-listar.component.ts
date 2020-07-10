import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilmeDetalhesComponent } from '../filme-detalhes/filme-detalhes.component'; // IMPORTADO
import { Component, OnInit, NgModule } from '@angular/core';
import { Observable } from 'rxjs'; // IMPORTADO
import { Filme } from '../filme'; // IMPORTADO
import { FilmeService } from '../filme.service'; // IMPORTADO
import { Router } from '@angular/router'; // IMPORTADO

@Component({
  selector: 'app-filme-listar',
  templateUrl: './filme-listar.component.html',
  styleUrls: ['./filme-listar.component.css']
})

export class FilmeListarComponent implements OnInit {
  filmes: Observable<Filme[]>; // cria uma lista de FILMES
  id: number;

  constructor(private filmeService: FilmeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() { // sempre que iniciar a aplicação, executar o metodo "reloadData()" que lista
               // todos os filmes
    this.reloadData();

    this.id = this.route.snapshot.params['id']; //pega o id que o Component DETALHES/Excluir enviou via route
  }

  reloadData(){   // metodo para listar todos os filmes
    this.filmes = this.filmeService.listarTodosFilmes(); // busca da classe service
    //.subscribe(
      //data => {
      //  console.log(data);
      //  this.filmes = data;
      //},
      //(err:HttpErrorResponse) => {
      //this.filmeService.openModal("ERRO", err.error.mensagem);
    //}
    //);
    console.log('metodo listar terminou');
    console.log(this.filmes);
  }

  public deleteFilme(id: number){ // metodo para deletar o filme, passando o id, vai ate a classe
                           // de serviço e executa o metodo deletar, apos isso utiliza
                           // o metodo reloadData() para listar todos os filmes
    this.filmeService.deletarFilme(id)
    .subscribe(
      data => {
      console.log(data);
      this.reloadData();
    },
    (err:HttpErrorResponse) => {
    this.filmeService.openModal("ERRO", err.error.mensagem);
  });
}


  detalhesFilme(id: number){ // metodo para detalhar o
    this.router.navigate(['detalhes', id]);
  }

  atualizarFilme(id: number){
    this.router.navigate(['atualizar', id]);
  }



}
