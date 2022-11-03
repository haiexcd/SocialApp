import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ListDialogComponent } from './list-dialog/list-dialog.component';

@Component({
  selector: 'app-like-list',
  templateUrl: './like-list.component.html',
  styleUrls: ['./like-list.component.sass']
})
export class LikeListComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  toggleList() {
    const dialogRef = this.dialog.open(ListDialogComponent)
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    })
  }

}
