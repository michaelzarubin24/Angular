import { Component, OnInit } from '@angular/core';
import { TaskListService } from '../task-list.service';
import { ITasks } from '../interfaces/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  public tasks: ITasks[];
  public editingTask: ITasks;

  constructor(private taskListService: TaskListService) {}

  ngOnInit() {
    this.tasks = this.taskListService.getTasks();
  }

  addTask(description: string) {
    const newTask = {
      id: this.generateUniqueId(),
      description,
      status: 'toDo',
      date: new Date(),
    };
    this.taskListService.addTask(newTask);
  }

  deleteTask(id: number) {
    this.taskListService.deleteTask(id);
    this.tasks = this.taskListService.getTasks();
  }

  startEditingTask(task: ITasks) {
    console.log('Starting editing task:', task);
    this.editingTask = { ...task };
  }
  editTask(updatedTask: ITasks) {
    this.taskListService.editTask(updatedTask);
    this.editingTask = null;
  }

  private generateUniqueId(): number {
    return new Date().getTime();
  }
}