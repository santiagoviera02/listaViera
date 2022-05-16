import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  aprobo: boolean = true;

  alumnos = [
    {
      nombre: 'Marcos',
      calificacion: 7,
      carrera: 'Ingenieria en Sistemas.',
      aprobo: true
    },
    {
      nombre: 'Miguel',
      calificacion: 6,
      carrera: 'Ingenieria en Informatica.',
      aprobo: true
    },
    {
      nombre: 'Jose',
      calificacion: 5,
      carrera: 'Programacion.',
      aprobo: true
    },
    {
      nombre: 'Juan Manuel',
      calificacion: 8.5,
      carrera: 'Ingenieria en Sistemas.',
      aprobo: true
    },
    {
      nombre: 'Roberto',
      calificacion: 9.5,
      carrera: 'Ingenieria en Informatica.',
      aprobo: true
    },
    {
      nombre: 'Agustin',
      calificacion: 4.2,
      carrera: 'Programacion.',
      aprobo: true

    },
  ]

  alumnas = [
    {
      nombre: 'Gisela',
      calificacion: 8,
      carrera: 'Programacion.',
      aprobo: true
    },
    {
      nombre: 'Micaela',
      calificacion: 5,
      carrera: 'Desarrolo Web.',
      aprobo: true
    },
    {
      nombre: 'Sofia',
      calificacion: 7,
      carrera: 'Desarrollo Web',
      aprobo: true
    }
  ]
  constructor() { }
  title = 'Lista de Estudiantes'
  ngOnInit(): void {
  }
}
