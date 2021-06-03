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

  hackathon: HackathonModel = {} as HackathonModel;
  nomePattern = /^[a-zA-Z]$/;
  cadastroForm: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.pattern(this.nomePattern)]),
    sobrenome: new FormControl('', [Validators.required, Validators.pattern(this.nomePattern)]),
    cpf: new FormControl('', [Validators.required]),
    rg: new FormControl('', [Validators.required]),
    curso: new FormControl('', [Validators.required, Validators.pattern(this.nomePattern)]),
    idade: new FormControl('', Validators.required),
    filiacaoMae: new FormControl('', [Validators.required, Validators.pattern(this.nomePattern)]),
    filiacaoPai: new FormControl('', [Validators.required, Validators.pattern(this.nomePattern)]),
    cep: new FormControl(null, [Validators.required]),
    numero: new FormControl(null, [Validators.required]),
    complemento: new FormControl('', [Validators.required]),
    rua: new FormControl('', [Validators.required]),
    bairro: new FormControl('', [Validators.required]),
    cidade: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required]),
    nota: new FormControl(null, [Validators.required])
  })
  textoBotao: string = 'Registrar'
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
    if (this.textoBotao == 'Registrar') {
      this.hackathon = {
        id: this.cadastroForm.get('id')?.value,
        nome: this.cadastroForm.get('nome')?.value,
        sobrenome: this.cadastroForm.get('sobrenome')?.value,
        cpf: this.cadastroForm.get('cpf')?.value,
        rg: this.cadastroForm.get('rg')?.value,
        curso: this.cadastroForm.get('curso')?.value,
        idade: this.cadastroForm.get('idade')?.value,
        filiacaoMae: this.cadastroForm.get('filiacaoMae')?.value,
        filiacaoPai: this.cadastroForm.get('filiacaoPai')?.value,
        cep: this.cadastroForm.get('cep')?.value,
        numero: this.cadastroForm.get('numero')?.value,
        complemento: this.cadastroForm.get('complemento')?.value,
        rua: this.cadastroForm.get('rua')?.value,
        bairro: this.cadastroForm.get('bairro')?.value,
        cidade: this.cadastroForm.get('cidade')?.value,
        estado: this.cadastroForm.get('estado')?.value,
        nota: this.cadastroForm.get('nota')?.value,
      };

      this.service.cadastrar(this.hackathon).subscribe(
        response => {
          this.toastr.success(response.mensagem);
        },
        (error) => this.toastr.error('Erro na requisição')
      );
    } else {
      this.editar();
    }

    this.voltar();
  }

  editar() {
    this.hackathon = {
      id: this.cadastroForm.get('id')?.value,
      nome: this.cadastroForm.get('nome')?.value,
      sobrenome: this.cadastroForm.get('sobrenome')?.value,
      cpf: this.cadastroForm.get('cpf')?.value,
      rg: this.cadastroForm.get('rg')?.value,
      curso: this.cadastroForm.get('curso')?.value,
      idade: this.cadastroForm.get('idade')?.value,
      filiacaoMae: this.cadastroForm.get('filiacaoMae')?.value,
      filiacaoPai: this.cadastroForm.get('filiacaoPai')?.value,
      cep: this.cadastroForm.get('cep')?.value,
      numero: this.cadastroForm.get('numero')?.value,
      complemento: this.cadastroForm.get('complemento')?.value,
      rua: this.cadastroForm.get('rua')?.value,
      bairro: this.cadastroForm.get('bairro')?.value,
      cidade: this.cadastroForm.get('cidade')?.value,
      estado: this.cadastroForm.get('estado')?.value,
      nota: this.cadastroForm.get('nota')?.value,
    };

    this.service.editar(this.id, this.hackathon).subscribe(
      (hack) => {
        this.hackathon = hack;
        this.toastr.success('Editado com sucesso!');
      },
      (error) => this.toastr.error('Erro na requisição')
    )
  }

  voltar() {
    this.route.navigate(['alunos-lista']);
  }
}
