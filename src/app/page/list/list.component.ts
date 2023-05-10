import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { DialogTodoItemComponent } from 'src/app/components/dialog-todo-item/dialog-todo-item.component';
import { todoItemData } from 'src/app/components/dialog-todo-item/types/dialog.types';
import { snackBarMessage, tableInfo } from './types/list.types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  todoItensList: todoItemData[];
  displayedColumns: string[];
  tableLabel = tableInfo;
  todoItensDataSource!: any;
  filterVisibility: boolean;
  constructor(public _dialog: MatDialog, private _snackBar: MatSnackBar) {
    this.todoItensList = [];
    this.displayedColumns = [
      this.tableLabel.DESCRIPTION_LABEL,
      this.tableLabel.PRIORITY_LABEL,
      this.tableLabel.DUE_DATE_LABEL,
    ];
    this.filterVisibility = false;
  }

  ngOnInit(): void {}
  openDialogTodoItem(): void {
    const dialogRef = this._dialog.open(DialogTodoItemComponent, {
      width: '35%',
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe({
      next: (v) => {
        if (v) {
          this.todoItensList.push(v);
          this.todoItensDataSource = new MatTableDataSource(this.todoItensList);
          this.filterVisibility = true;
          this.snackBarExihibit(
            snackBarMessage.ITEM_CREATED,
            snackBarMessage.SNACK_CLOSE_CONFIRMATION
          );
        } else {
          this.snackBarExihibit(
            snackBarMessage.NO_DATA_TABLE,
            snackBarMessage.SNACK_CLOSE_CONFIRMATION
          );
        }
        console.info(v);
      },
      error: (e) =>
        console.error(
          this.snackBarExihibit(
            snackBarMessage.CREATION_ERROR,
            snackBarMessage.SNACK_CLOSE_CONFIRMATION
          )
        ),
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.todoItensDataSource.filter = filterValue.trim().toLowerCase();
  }

  snackBarExihibit(label: string, confirmation: string): void {
    this._snackBar.open(label, confirmation, {
      duration: 1350,
    });
  }
}
