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
      curso: 'Angular',
      aprobo: true
    },
    {
      nombre: 'Miguel',
      calificacion: 6,
      curso: 'Vue',
      aprobo: true
    },
    {
      nombre: 'Jose',
      calificacion: 5,
      curso: 'Angular',
      aprobo: true
    },
    {
      nombre: 'Juan Manuel',
      calificacion: 8.5,
      curso: 'React',
      aprobo: true
    },
    {
      nombre: 'Roberto',
      calificacion: 9.5,
      curso: 'marketing',
      aprobo: true
    },
    {
      nombre: 'Agustin',
      calificacion: 4.2,
      curso: 'Vue',
      aprobo: true

    },
  ]

  alumnas = [
    {
      nombre: 'Gisela',
      calificacion: 8,
      curso: 'React',
      aprobo: true
    },
    {
      nombre: 'Micaela',
      calificacion: 5,
      curso: 'JS',
      aprobo: true
    }
  ]
  constructor() { }
  title = 'Lista de Estudiantes'
  ngOnInit(): void {
  }
}
