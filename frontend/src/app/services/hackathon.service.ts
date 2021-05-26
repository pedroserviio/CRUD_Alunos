import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HackathonModel } from '../interfaces/hackathon.model';

@Injectable({
  providedIn: 'root'
})
export class HackathonService {
  constructor(private httpClient: HttpClient) { }

  listar(): Observable<HackathonModel[]> {
    return this.httpClient.get<HackathonModel[]>(
      `http://localhost:3000/stefanini/hackathons`
    );
  }

  cadastrar(hackathon: HackathonModel): Observable<{ mensagem: string; id: string }> {
    return this.httpClient.post<{ mensagem: string; id: string }>(
      `http://localhost:3000/stefanini/hackathons`,
      hackathon
    );
  }

  excluir(id: string): Observable<any> {
    return this.httpClient.delete<any>(
      `http://localhost:3000/stefanini/hackathons/${id}`
    );
  }

  editar(id: string, hackathon: HackathonModel): Observable<HackathonModel>{
    return this.httpClient.put<HackathonModel>(`http://localhost:3000/stefanini/hackathons/${id}`, hackathon);
  }

  buscarId(id: string): Observable<HackathonModel> {
    return this.httpClient.get<HackathonModel>( `http://localhost:3000/stefanini/hackathons/${id}`);
  }
}
