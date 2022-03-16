import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

// O Serviço vai ser compatilhado com todos os componentes da aplicação caso seja declarada no app.module.ts
import { CursosService } from '../cursos/cursos.service'; 
import { CriarCursoComponent } from './criar-curso.component'; 
import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component';

@NgModule({
  declarations: [
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CriarCursoComponent
  ],
  //Declaração de Serviços em providers
  // providers: [
  //   CursosService
  // ]
})
export class CriarCursoModule { }
