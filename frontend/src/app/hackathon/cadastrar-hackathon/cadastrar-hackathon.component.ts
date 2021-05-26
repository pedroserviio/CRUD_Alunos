import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HackathonModel } from 'src/app/interfaces/hackathon.model';
import { HackathonService } from 'src/app/services/hackathon.service';

@Component({
  selector: 'app-cadastrar-hackathon',
  templateUrl: './cadastrar-hackathon.component.html',
  styleUrls: ['./cadastrar-hackathon.component.css']
})
export class CadastrarHackathonComponent implements OnInit {

  hackathon!: HackathonModel;
  nomePattern = "^[a-zA-Z]$"  
  cadastroForm: FormGroup = new FormGroup({
    nome: new FormControl('',[ Validators.required, Validators.pattern(this.nomePattern)]),
    idade: new FormControl('', Validators.required),
    nota: new FormControl(0, [Validators.required])
  })
  textoBotao: string = 'Cadastrar'
  id: any;

  constructor(private service: HackathonService, private toastr: ToastrService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parametros => {
      if (parametros['id']) {
        this.textoBotao = 'Editar'
        this.id = parametros['id']
        
        this.service.buscarId(this.id).subscribe(hack => {
          console.log(hack);
          this.hackathon = hack;
        })
      }
    })
  }

  cadastrar() {
    if (this.textoBotao == 'Cadastrar') {
      this.hackathon = {
        id: this.cadastroForm.get('id')?.value,
        nome: this.cadastroForm.get('nome')?.value,
        idade: this.cadastroForm.get('idade')?.value,
        nota: this.cadastroForm.get('nota')?.value,
      };

      this.service.cadastrar(this.hackathon).subscribe(
        response => {
          this.toastr.success(response.mensagem);
        },
        (err) => this.toastr.error(err.mensagem)
      );
    } else {
      console.log("this hack", this.hackathon);
      this.editar();
    }

    this.voltar();
  }

  editar() {
    this.hackathon = {
      id: this.cadastroForm.get('id')?.value,
      nome: this.cadastroForm.get('nome')?.value,
      idade: this.cadastroForm.get('idade')?.value,
      nota: this.cadastroForm.get('nota')?.value,
    };
    
    this.service.editar(this.id, this.hackathon).subscribe(hack => {
      this.hackathon = hack;
    })
  }

  voltar() {
    this.route.navigate(['']);
  }
}
