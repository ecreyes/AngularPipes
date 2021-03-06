import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = "Eduardo";
  arreglo = [1,2,3,4,5,6,7,8,9];
  PI = Math.PI;
  a:number = 0.234;
  salario:number = 1234.5;
  ninja = {
    nombre: "Naruto",
    grado:"Hokage",
    edad: 32,
    lugar : {
      pais:"fuego",
      numero: 1,
      aldea:"Konoha"
    }
  };

  valorDePromesa = new Promise( (resolve,reject)=>{
    setTimeout(()=>resolve("Llego la data!"),3500);
  });

  fecha = new Date();
  nombre2 = "edUardo rEYes oyaRzo";
  video = "15ppjqoVItg";
  activar:boolean = true;
}
