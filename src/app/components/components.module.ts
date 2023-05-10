import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DialogTodoItemComponent } from './dialog-todo-item/dialog-todo-item.component';

@NgModule({
  declarations: [DialogTodoItemComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  exports: [DialogTodoItemComponent],
})
export class ComponentsModule {}
