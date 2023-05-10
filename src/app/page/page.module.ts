import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './list/list.component';
import { PageRoutingModule } from './page-routing.module';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    PageRoutingModule,
    MatSnackBarModule,
    SharedModule,
    MatTableModule,
  ],
})
export class PageModule {}
