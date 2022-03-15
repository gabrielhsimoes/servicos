import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// O Serviço vai ser compatilhado com todos os componentes da aplicação caso seja declarada no app.module.ts
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosService } from './cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CriarCursoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  //Declaração de Serviços em providers
  providers: [
    CursosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
