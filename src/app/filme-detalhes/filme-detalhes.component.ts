import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Filme } from "../filme"; //IMPORTADO
import { FilmeService } from "../filme.service" //IMPORTADO
import { FilmeListarComponent } from "../filme-listar/filme-listar.component" //IMPORTADO COMPONENT DO LISTAR
import { Router, ActivatedRoute } from "@angular/router" //IMPORTADO

@Component({
  selector: 'app-filme-detalhes',
  templateUrl: './filme-detalhes.component.html',
  styleUrls: ['./filme-detalhes.component.css']
})
export class FilmeDetalhesComponent implements OnInit {

  id: number;
  filme: Filme;

  constructor(private route: ActivatedRoute, private router: Router,  //Construtor para instanciar os objetos
    private filmeService: FilmeService) { }

  ngOnInit() {
    this.filme = new Filme();

    this.id = this.route.snapshot.params['id']; //pega o id que o Component LISTAR enviou via route

    this.filmeService.listarFilme(this.id)
    .subscribe(
      data => {
      console.log(data);
      this.filme = data;
    },
      (err:HttpErrorResponse) => {
      this.filmeService.openModal('ERRO',err.error.mensagem);}
    );
  }

  ReturnToList(){
    this.router.navigate(['filmes']);
  }

  SendToAtualizar(id: number){
    this.router.navigate(['atualizar', id]);
  }

  SendToExcluir(id: number){
  this.filmeService.deletarFilme(id)
    .subscribe(
      data => {
      console.log(data);
      this.reloadData();
    },
    error => console.log(error));
    console.log('terminou o metodo DELETAR');
  }

  reloadData(){
    this.router.navigate(['filmes']);
  }

}
