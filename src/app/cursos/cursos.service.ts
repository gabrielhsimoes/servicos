import { Injectable, EventEmitter } from "@angular/core";

import { LogService } from "../shared/log.service";

@Injectable()

export class CursosService{

emitirCursoCriado = new EventEmitter<string>();
//Quando declaramos um atributo de uma classe ou um método como static significa que não precisamos da instância da classe
//Para poder acessar o mesmo
static criouNovoCurso = new EventEmitter<string>();


private cursos: string[] = ['Angular', 'Java', 'Javascript'];

constructor(private logService: LogService){
    console.log('CursosService')
}

getCursos(){
    this.logService.consoleLog('Obtendo lista de cursos!')
    return this.cursos;
    }

addCursos(curso: string){
    this.logService.consoleLog(`Criando um novo curso ${curso}`);
     this.cursos.push(curso);
     this.emitirCursoCriado.emit(curso);
     CursosService.criouNovoCurso.emit(curso)
}
}