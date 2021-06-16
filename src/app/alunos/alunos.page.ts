import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/aluno.model';
import { AlunosServiceService } from '../services/alunos-service.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.page.html',
  styleUrls: ['./alunos.page.scss'],
})
export class AlunosPage implements OnInit {

  alunos = {} as Aluno;
  Aluno : Aluno[];

  constructor(private AlunosService : AlunosServiceService) { }

  ngOnInit(): void {
    this.AlunosService.getAluno().subscribe((alunos:Aluno[]) => {
      this.Aluno = alunos;
    })
  }

}
