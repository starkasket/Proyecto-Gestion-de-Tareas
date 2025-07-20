import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing-module';
import { Tasks } from './tasks';
import { List } from './list/list';
import { Form } from './form/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskItem } from './task-item/task-item';
import { ShowRoute } from '../directives/show-route';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    Tasks,
    List,
    Form,
    TaskItem,
    ShowRoute
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TasksModule { }
