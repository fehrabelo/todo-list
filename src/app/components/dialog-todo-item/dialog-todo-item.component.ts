import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { IPriorities, formValidationMessage } from './types/dialog.types';

@Component({
  selector: 'app-dialog-todo-item',
  templateUrl: './dialog-todo-item.component.html',
  styleUrls: ['./dialog-todo-item.component.scss'],
})
export class DialogTodoItemComponent implements OnInit {
  prioritiesRange: IPriorities[] = [
    { value: 'Low' },
    { value: 'Moderated' },
    { value: 'High' },
  ];

  todoItemForm = new FormGroup({
    description: new FormControl(null, Validators.required),
    dueDate: new FormControl(null, Validators.required),
    priority: new FormControl(null, Validators.required),
  });

  formRequiredMessages = formValidationMessage;
  constructor(public _dialog: MatDialogRef<DialogTodoItemComponent>) {}

  ngOnInit(): void {}
  sendDialogDataToListTodoItemPage(): void {
    this._dialog.close(this.todoItemForm.value);
  }

  closeDialog(): void {
    this._dialog.close();
  }
}
