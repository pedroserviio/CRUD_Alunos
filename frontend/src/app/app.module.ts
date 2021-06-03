import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarHackathonComponent } from './hackathon/listar-hackathon/listar-hackathon.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CadastrarHackathonComponent } from './hackathon/cadastrar-hackathon/cadastrar-hackathon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { OrderModule } from 'ngx-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DescricaoComponent } from './hackathon/descricao/descricao.component';
import { HomeComponent } from './hackathon/home/home/home.component';
import { ContatoComponent } from './hackathon/contato/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarHackathonComponent,
    CadastrarHackathonComponent,
    DescricaoComponent,
    HomeComponent,
    ContatoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    OrderModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
