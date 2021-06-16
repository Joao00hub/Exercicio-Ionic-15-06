import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../models/aluno.model';
 
@Injectable({
  providedIn: 'root'
})
export class AlunosServiceService {

  url = 'http://localhost:8100';

  constructor(private httpClient: HttpClient) { }

  getAluno(): Observable<Aluno[]> {
    return this.httpClient.get<Aluno[]>(this.url); 
  }

  handleError(handleError: any): import("rxjs").OperatorFunction<Aluno[], any>{
    throw new Error('Method not implemented.');
  }
}
