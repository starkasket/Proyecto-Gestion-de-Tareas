import { Component } from '@angular/core';

@Component({
   selector: 'app-tasks',
   standalone: false,
   template: `
   <section class="container py-4">
   <div class="d-flex justify-content-between align-items-center mb-3">
   <h2 class="mb-4 h4 fw-bold ">Gestión de Tareas</h2>
<div class="d-flex justify-content-between align-items-center mb-4">
   <button  *appShowRoute="'/form'"  routerLink="" class="btn  me-2 btn-outline-primary">Inicio</button>
   <button  *appShowRoute="'/'"  routerLink="/form" class="btn btn-outline-success mb-3 float-end"> Agregar Nueva Tarea</button>

   
   
</div>


   </div>
   <router-outlet></router-outlet>
   </section>

   
  `,
   styles: ``
})
export class Tasks {

}
