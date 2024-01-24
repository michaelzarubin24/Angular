import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITasks } from '../interfaces/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() task: ITasks;
  @Input() isEditing: boolean;
  @Output() deleteTask = new EventEmitter<number>();
  @Output() editTask = new EventEmitter<ITasks>();
  @Output() startEditingTask = new EventEmitter<ITasks>();

  editedDescription: string;

  onDeleteTask() {
    this.deleteTask.emit(this.task.id);
  }

  onEditTask() {
    console.log('Edit button clicked');
    this.editedDescription = this.task.description;
    this.startEditingTask.emit(this.task);
  }

  onEditConfirm() {
    console.log('Edit confirmed for task:', this.task);
    const editedTask: ITasks = { ...this.task, description: this.editedDescription };
    this.editTask.emit(editedTask);
  }
}