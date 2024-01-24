import { Injectable } from '@angular/core';
import { ITasks } from './interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class TaskListService {
  private tasks: ITasks[] = [
    {
      id: 0,
      description: 'Walking along the street of New York',
      status: 'done',
      date: new Date(),
    },
    {
      id: 1,
      description: 'Walking along the street of Tokyo',
      status: 'inProgress',
      date: new Date(),
    },
    {
      id: 3,
      description: 'Walking along the street of Singapore',
      status: 'done',
      date: new Date(),
    },
  ];

  constructor() {}

  public getTasks() {
    return this.tasks;
  }

  public addTask(task: ITasks) {
    this.tasks.push(task);
  }

  public deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  public editTask(updatedTask: ITasks) {
    const index = this.tasks.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }
}
