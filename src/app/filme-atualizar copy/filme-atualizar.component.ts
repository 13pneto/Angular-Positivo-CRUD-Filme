import { Component, OnInit } from '@angular/core';
import { Filme } from '../filme'; // IMPORTADO
import { FilmeService } from '../filme.service' // IMPORTADO
import { ActivatedRoute, Router } from '@angular/router' // IMPORTADO


@Component({
  selector: 'app-filme-atualizar',
  templateUrl: './filme-atualizar.component.html',
  styleUrls: ['./filme-atualizar.component.css']
})
export class FilmeAtualizarComponent implements OnInit {

  id: number;                 // Atributos id e objeto FILME
  filme: Filme;


  constructor(private route: ActivatedRoute, private router: Router,  // Construtor para instanciar os objetos
    private filmeService: FilmeService) { }
    submitted = false; // INSERIDO DEPOIS DEVIDO AO ERRO ts2339

  ngOnInit() {    // Ao carregar pagina, sera feito este bloco, criado as variaveis e listado os filmes
    this.filme = new Filme();

    this.id = this.route.snapshot.params['id'];

    this.filmeService.listarFilme(this.id)      // subscribe é do operador OBSERVABLE, assim que a resposta JSON vier será populado na classe filme
                                                // instanciada nos atributos acima
    .subscribe(data => {
      console.log(data)
      this.filme = data;
    }, error => console.log(error));
  }

  atualizarFilme(){   // utiliza o metodo atualizar do Service
    this.filmeService.atualizarFilme(this.id, this.filme)
    .subscribe(data => console.log(data), error => console.log(error));
    this.filme = new Filme();
    this.listar();
  }

  onSubmit(){ // metodo chamado quando o evento do formulario for acionado
   this.atualizarFilme();
  }

  listar(){
    this.router.navigate(['/filmes']);
  }



}
