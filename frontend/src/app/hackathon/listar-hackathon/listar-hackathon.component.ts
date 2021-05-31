import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HackathonModel } from 'src/app/interfaces/hackathon.model';
import { HackathonService } from 'src/app/services/hackathon.service';

@Component({
  selector: 'app-listar-hackathon',
  templateUrl: './listar-hackathon.component.html',
  styleUrls: ['./listar-hackathon.component.css']
})
export class ListarHackathonComponent implements OnInit {

  alunos: HackathonModel[] = [];
  carregarLoading: boolean = false;
  key: any = 'id';
  reverse: boolean = false;
  filtroDePesquisa: any;

  constructor(private service: HackathonService, private route: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.service.listar().subscribe(alunos => {
        this.carregarLoading = true;
        this.alunos = alunos;
      });
    }, 3000)
  }

  irCadastro() {
    this.route.navigate(['/cadastrar']);
  }

  excluir(aluno: HackathonModel) {
    this.service.excluir(aluno.id as string).subscribe(
      (success) => {
      const index = this.alunos.findIndex((a) => a.id === aluno.id);
      this.alunos.splice(index, 1);
      this.toastr.success('Excluido com sucesso!');
    },
      (error) => this.toastr.error('Erro na Requisição')
    );

  }

  editar(aluno: HackathonModel) {
    this.route.navigate(['/cadastrar', aluno.id]);
  }

  sort = (key: any) => {
    this.key = key;
    this.reverse = !this.reverse;
  }

  descricao = (aluno: HackathonModel) => {
    this.route.navigate(['/descricao', aluno.id]);
  }

}
