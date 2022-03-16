import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// O Serviço vai ser compatilhado com todos os componentes da aplicação caso seja declarada no app.module.ts
import { AppComponent } from './app.component';
import { CursosService } from './cursos/cursos.service';
import { CriarCursoModule } from './criar-curso/criar-curso.module';  
import { FormsModule } from '@angular/forms';
import { CursosModule } from './cursos/cursos.module';
import { LogService } from './shared/log.service';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CriarCursoModule,
    CursosModule
  ],
  providers: [ LogService ],
  //Declaração de Serviços em providers
  // providers: [
  //   CursosService
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
