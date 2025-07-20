import { Injectable } from '@angular/core';
import { BehaviorSubject, max, Observable } from 'rxjs';

export interface Task {
  id: number;
  title: String;
  completed: boolean;
}

const key = "taskList"

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  private currentId = 1;

  constructor() {

/* const savedTasks = localStorage.getItem('tasks');

if(savedTasks){
  this.tasksSubject.next(JSON.parse(savedTasks))
  this.currentId = this.getNextId(JSON.parse(savedTasks));
} */

   






/* <----- A PARTIR DE AQUÍ LA TAREA QUE SE REALIZÓ -----> */
    const storedTasks = localStorage.getItem(key)
    /* this.addTask('Lavar Dientes') */

    if (storedTasks) {
      const parseTasks: Task[] = JSON.parse(storedTasks)
      this.tasksSubject.next(parseTasks);
      const maxId = parseTasks.reduce((max, task) => task.id > max ? task.id : max, 0)
      this.currentId = maxId + 1;
 
    } else {
      this.tasksSubject.next([])
    }

    this.tasksSubject.subscribe(tasks => {
      localStorage.setItem(key, JSON.stringify(tasks))
    })
  }

  getTask(): Observable<Task[]> {
    return this.tasksSubject.asObservable();
  }

/* 
 private getNextId(tasks: Task[]): number{
      const maxId = tasks.reduce((max,task)=> Math.max(max, task.id), 0);
      return maxId+ 1;
    }

    private updateLocalStorage(tasks: Task[]): void{
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
 */
  addTask(title: string): void {
    const newTask: Task = {
      id: this.currentId++,
      title,
      completed: false
    };
    const updateTasks = [...this.tasksSubject.getValue(), newTask]
    this.tasksSubject.next(updateTasks)
/*     this.updateLocalStorage(updateTasks); */
  }

  toggleCompleted(taskId: number): void {
    const tasks = this.tasksSubject.getValue();
    const updatedTasks = tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task)
    this.tasksSubject.next(updatedTasks)
  }

}
