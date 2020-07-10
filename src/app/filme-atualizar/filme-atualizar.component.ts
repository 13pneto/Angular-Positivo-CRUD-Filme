import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
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

  formulario: FormGroup;
  id: number;                 // Atributos id e objeto FILME
  filme: Filme;
  modalRef: BsModalRef;       // MODAL


  constructor(private route: ActivatedRoute,
    private router: Router,  // Construtor para instanciar os objetos
    private filmeService: FilmeService,
    private modalService: BsModalService, // import para funcionar o MODAL
    private formBuilder: FormBuilder
    ) { }
    submitted = false; // INSERIDO DEPOIS DEVIDO AO ERRO ts2339

  ngOnInit() {
    this.filme = new Filme();
    this.id = this.route.snapshot.params['id']; // Pegar o parametro id que foi enviado em outra pag.

    this.formulario = this.formBuilder.group({
      // idFilme: [null],
      titulo: [null, [Validators.required, Validators.maxLength(50)]],
      sinopse: [null, [Validators.required, Validators.maxLength(300)]],
      dataLancamento: [null, [Validators.required]],
      genero: [null, [Validators.required, Validators.maxLength(30)]],
      nacionalidade: [null, [Validators.required, Validators.maxLength(30)]],
      estoque: [null, [Validators.required, Validators.maxLength(5)]]
    });

    this.filmeService.listarFilme(this.id)      // subscribe é do OBSERVABLE, assim que a resposta JSON vier será populado na classe filme
                                                // instanciada nos atributos acima
    .subscribe(data => {
      console.log(data)
      this.filme = data;
    },
      (err:HttpErrorResponse) => {
      this.filmeService.openModal("ERRO", err.error.mensagem);
    });
  }

  atualizarFilme(){   // utiliza o metodo atualizar do Service
    if (this.formulario.valid){
      this.filmeService.atualizarFilme(this.id, this.filme)
      .subscribe(
        data => console.log(data),
        (err:HttpErrorResponse)  => {
          this.filmeService.openModal('ERRO',err.error.mensagem);//console.log(error),
        });
      this.filme = new Filme();
      this.listar();
  }
    else{
      this.filmeService.openModal('Formulário preenchido incorretamente.','O formulário não está preenchido corretamente. Favor verificar as informações.'); //Abrir modal com erro
    }
  }

  listar(){
    this.router.navigate(['/filmes']);
  }

}
