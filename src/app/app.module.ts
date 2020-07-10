import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // IMPORTADO
import { HttpClientModule } from '@angular/common/http'; // IMPORTADO
import { AppComponent } from './app.component';
import { CadastrarFilmeComponent } from './cadastrar-filme/cadastrar-filme.component';
import { FilmeDetalhesComponent } from './filme-detalhes/filme-detalhes.component';
import { FilmeListarComponent } from './filme-listar/filme-listar.component';
import { FilmeAtualizarComponent } from './filme-atualizar/filme-atualizar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarFilmeComponent,
    FilmeDetalhesComponent,
    FilmeListarComponent,
    FilmeAtualizarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ModalModule.forRoot() //Import para usar modal no bootstrap
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
