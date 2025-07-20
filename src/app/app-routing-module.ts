import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { authGuard } from './guards/auth-guard';

const routes: Routes = [
  { path: 'login', component: Login },
  {
    path: '',
    loadChildren: () => import('./tasks/tasks-module').then(m => m.TasksModule),
    canActivate: [authGuard]
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
