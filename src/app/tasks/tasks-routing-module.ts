import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tasks } from './tasks';
import { List } from './list/list';
import { Form } from './form/form';

const routes: Routes = [
  {
    path: '', 
    component: Tasks,
    children: [
      {
        path: '', component: List
      }, 
      {
        path: 'form', component: Form
      }
    ]
  }
];

    


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
