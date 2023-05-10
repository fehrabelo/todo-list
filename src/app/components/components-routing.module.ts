import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogTodoItemComponent } from './dialog-todo-item/dialog-todo-item.component';

const routes: Routes = [
  {
    path: 'add-todo-item',
    component: DialogTodoItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
