import { Component } from '@angular/core';

interface Alumno {
  nombre: string;
  fechaDeInscripcion: Date;
  materia: string;
  aprobado: boolean;
};

@Component({
  selector: 'app-lista-de-alumnos',
  templateUrl: './lista-de-alumnos.component.html',
  styleUrls: ['./lista-de-alumnos.component.css']
})
export class ListaDeAlumnosComponent {

  alumnos : Alumno[] = [
    {
      nombre: "Maria",
      fechaDeInscripcion: new Date(),
      materia: "Matematicas",
      aprobado: false,
    },
    {
      nombre: "Luis",
      fechaDeInscripcion: new Date(),
      materia: "Lengua",
  
      aprobado: true,
    },
    {
      nombre: "Sofia",
      fechaDeInscripcion: new Date(),
      materia: "Matematicas",
      aprobado: true,
    },
    {
      nombre: "Antonio",
      fechaDeInscripcion: new Date(),
      materia: "Lengua",
      aprobado: false,
    },
    {
      nombre: "Marcos",
      fechaDeInscripcion: new Date(),
      materia: "Lengua",
      aprobado: true,
    }
  ]
}
