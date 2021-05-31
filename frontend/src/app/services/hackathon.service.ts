import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HackathonModel } from '../interfaces/hackathon.model';

const URL = 'http://localhost:3000/stefanini/hackathons'

@Injectable({
  providedIn: 'root'
})
export class HackathonService {
  constructor(private httpClient: HttpClient) { }

  listar(): Observable<HackathonModel[]> {
    return this.httpClient.get<HackathonModel[]>(URL);
  }

  cadastrar(hackathon: HackathonModel): Observable<{ mensagem: string; id: any }> {
    return this.httpClient.post<{ mensagem: string; id: string }>(URL, hackathon);
  }

  excluir(id: any): Observable<any> {
    return this.httpClient.delete<any>(`${URL}/${id}`
    );
  }

  editar(id: any, hackathon: HackathonModel): Observable<HackathonModel>{
    return this.httpClient.put<HackathonModel>(`${URL}/${id}`, hackathon);
  }

  buscarId(id: any): Observable<HackathonModel> {
    return this.httpClient.get<HackathonModel>( `${URL}/${id}`);
  }
}
