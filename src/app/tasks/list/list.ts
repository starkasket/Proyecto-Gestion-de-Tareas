import { Component } from '@angular/core';
import { Task, TaskService } from '../../services/task';


@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class List {


  tasks: Task[] = [{ id: 1, title: "Lavar Ropa", completed: false },
  ];
  constructor(private servicioTask: TaskService) { }

  ngOnInit(): void {
    this.servicioTask.getTask().subscribe((tasks: Task[]) => this.tasks = tasks)
  }
  cambioCheckbox(id: number) {
    console.log(`Tarea ${id} modificada`)
    this.servicioTask.toggleCompleted(id);
  }
}



