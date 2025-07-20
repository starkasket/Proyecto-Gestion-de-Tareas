import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../services/task';



@Component({
  selector: 'app-task-item',
  standalone: false,
  templateUrl: './task-item.html',
  styleUrl: './task-item.scss'
})
export class TaskItem {
  @Input() task!: Task;
  @Output() complete = new EventEmitter<number>();
  onComplete() {
    this.complete.emit(this.task.id);
  }
}
