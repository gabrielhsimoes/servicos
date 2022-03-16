import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

// O Serviço vai ser compatilhado com todos os componentes da aplicação caso seja declarada no app.module.ts
import { CursosService } from './cursos.service'; 
import { CursosComponent } from './cursos.component'; 

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent
  ],
  //Declaração de Serviços em providers
  // providers: [
  //   CursosService
  // ]
})
export class CursosModule { }
