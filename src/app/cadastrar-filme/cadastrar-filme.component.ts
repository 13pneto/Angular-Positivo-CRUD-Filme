import { throwError } from 'rxjs';
import { AlertModalComponent } from './../alert-modal/alert-modal.component';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Filme } from '../filme'; // IMPORTADO
import { FilmeService } from '../filme.service'; // IMPORTADO
import { Router } from '@angular/router'; // IMPORTADO
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cadastrar-filme',
  templateUrl: './cadastrar-filme.component.html',
})

export class CadastrarFilmeComponent implements OnInit {
  formulario: FormGroup;
  filme: Filme = new Filme();
  modalRef: BsModalRef; // import para funcionar o MODAL

  constructor(
    private filmeService: FilmeService,
    private router: Router,
    private modalService: BsModalService, // import para funcionar o MODAL
    private formBuilder: FormBuilder
  ) { } // Construtor para instanciar os objetos

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      // idFilme: [null],
      titulo: [null, [Validators.required, Validators.maxLength(50)]],
      sinopse: [null, [Validators.required, Validators.maxLength(300)]],
      dataLancamento: [null, [Validators.required]],
      genero: [null, [Validators.required, Validators.maxLength(30)]],
      nacionalidade: [null, [Validators.required, Validators.maxLength(30)]],
      estoque: [null, [Validators.required, Validators.maxLength(5)]]
    });

  }

  salvar(): void {

    if (this.formulario.valid){

    this.filme = Object.assign(this.filme, this.formulario.value); // Associa as informações do formulário

    console.log('ASSIGN realizado entre FILME e FORMULARIO');
    console.log(this.filme);

    this.filmeService.cadastrarFilme(this.filme).subscribe(
        filme => {
        console.log(filme);
        this.filme = filme;
        },
          (err:HttpErrorResponse) => {
           this.filmeService.openModal('ERRO',err.error.mensagem);//console.log(error),
        });
    } else{
      this.filmeService.openModal('Formulário preenchido incorretamente.','O formulário não está preenchido corretamente. Favor verificar as informações.'); //Abrir modal com erro
    }
    this.filme = new Filme();
    this.listar();
  }

   listar(): void{
    this.router.navigate(['/filmes']);
  }
}
