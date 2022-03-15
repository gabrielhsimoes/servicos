import { Injectable, EventEmitter } from "@angular/core";

@Injectable()

export class CursosService{

emitirCursoCriado = new EventEmitter<string>();

private cursos: string[] = ['Angular', 'Java', 'Javascript'];

constructor(){
    console.log('CursosService')
}

getCursos(){
    return this.cursos;
    }

addCursos(curso: string){
     this.cursos.push(curso);
     this.emitirCursoCriado.emit(curso);
}
}