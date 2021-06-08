import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarHackathonComponent } from './hackathon/cadastrar-hackathon/cadastrar-hackathon.component';
import { ContatoComponent } from './hackathon/contato/contato/contato.component';
import { DescricaoComponent } from './hackathon/descricao/descricao.component';
import { HomeComponent } from './hackathon/home/home/home.component';
import { ListarHackathonComponent } from './hackathon/listar-hackathon/listar-hackathon.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent},
{ path: 'alunos-lista', component: ListarHackathonComponent},
{ path: 'cadastrar', component: CadastrarHackathonComponent},
{ path: 'cadastrar/:id', component: CadastrarHackathonComponent},
{ path: 'descricao/:id', component: DescricaoComponent },
{ path: 'contato', component: ContatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
