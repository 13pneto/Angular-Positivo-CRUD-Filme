import {CadastrarFilmeComponent} from './cadastrar-filme/cadastrar-filme.component';
import {FilmeListarComponent} from './filme-listar/filme-listar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FilmeDetalhesComponent} from './filme-detalhes/filme-detalhes.component';
import {FilmeAtualizarComponent} from './filme-atualizar/filme-atualizar.component';


const routes: Routes = [            //AQUI é vinculado as rotas, ex: /filmes mandar para o componente de listarfilmes
  { path: '', redirectTo: 'filme', pathMatch: 'full' },
  { path: 'filmes', component: FilmeListarComponent },
  { path: 'cadastrar', component: CadastrarFilmeComponent },
  { path: 'atualizar/:id',  component: FilmeAtualizarComponent },
  { path: 'detalhes/:id',   component: FilmeDetalhesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
