import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HackathonModel } from 'src/app/interfaces/hackathon.model';
import { HackathonService } from 'src/app/services/hackathon.service';

@Component({
  selector: 'app-descricao',
  templateUrl: './descricao.component.html',
  styleUrls: ['./descricao.component.css']
})
export class DescricaoComponent implements OnInit {

  id: any;
  aluno: HackathonModel = {} as HackathonModel;
  
  constructor(private route: Router, private activatedRoute: ActivatedRoute, private service: HackathonService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parametros => {
      if(parametros['id']) {
        this.id = parametros['id'];
        
        this.service.buscarId(this.id).subscribe(alun => {
          console.log(alun);
          this.aluno = alun;
        })
      }
    })
  }

  voltar() {
    this.route.navigate(['/alunos-lista']);
  }

}
