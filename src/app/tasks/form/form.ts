import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.html',
  styleUrl: './form.scss'
})
export class Form implements OnInit {

  taskForm!: FormGroup

  constructor(private taskService: TaskService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.taskForm = new FormGroup({
      title: new FormControl('')
    })
  }
  addTarea() {
    if (this.taskForm.valid) {
      const title = this.taskForm.value.title;
      this.taskService.addTask(title);
      this.taskForm.reset();
    }


  }


}


