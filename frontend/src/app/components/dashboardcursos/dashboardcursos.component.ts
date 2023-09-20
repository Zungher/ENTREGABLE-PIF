import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';  //pegar importacion
import { BackendService } from 'src/app/services/backend.service'; //pegar importacion

@Component({
  selector: 'app-dashboardcursos',
  templateUrl: './dashboardcursos.component.html',
  styleUrls: ['./dashboardcursos.component.css']
})
export class DashboardcursosComponent {

  usuarios: any[] = [];
  info: any;

  constructor(private backend: BackendService, private router: Router, private ruta: ActivatedRoute) { } //crear constructor

  ngOnInit() { //crear ngOnInit
    console.log('GG');
    
    //llamar a la funcion Dashboard del backend.service.ts
    this.backend.Dashboard().subscribe(
      res => {
        this.info = res
        for (let i = 0; i < this.info.respuesta.length; i++) {
          this.usuarios.push(this.info.respuesta[i])
        }

        console.log(this.usuarios);
        
      },
      err => {
        console.log(err)
      }
    );

  }

}
