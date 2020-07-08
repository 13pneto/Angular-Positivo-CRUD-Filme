import { Component, OnInit } from '@angular/core';
import { Filme } from '../filme'; // IMPORTADO
import { FilmeService } from '../filme.service'; // IMPORTADO
import { Router } from '@angular/router'; // IMPORTADO
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-cadastrar-filme',
  templateUrl: './cadastrar-filme.component.html',
  styleUrls: ['./cadastrar-filme.component.css']
})

export class CadastrarFilmeComponent implements OnInit {

  formulario: FormGroup;
  filme: Filme = new Filme();
//  submitted = false;

  constructor(
    private filmeService: FilmeService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { } // Construtor para instanciar os objetos

  ngOnInit() {

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

 // novoFilme(): void{
    // this.submitted = false; //submited = Retorna se o envio do formulário foi acionado.
 //   this.filme = new Filme();
 // }

  salvar() {

    if (this.formulario.valid){

    this.filme = Object.assign(this.filme, this.formulario.value); // Associa as informações do formulário

    console.log('ASSIGN realizado entre FILME e FORMULARIO');
    console.log(this.filme);

    this.filmeService.cadastrarFilme(this.filme).subscribe(
        filme => {
        console.log(filme);
        this.filme = filme;
        },
        error => console.log(error),
        () => console.log('sucesso'));
    this.filme = new Filme();
    this.listar();
  } else{
    console.log('campos obrigatórios devem ser preenchidos');
  }

   }

   listar(){
    this.router.navigate(['/filmes']);
  }

//   onSubmit(){ // metodo chamado quando o evento do formulario por acionado
//     // this.submitted = true;
//     this.salvar();
//  }

   }
