import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { City } from 'src/app/models/city';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.delete.component.html',
  styleUrls: ['./dialog.delete.component.css']
})
export class DialogDeleteComponent implements OnInit {
  city: City;

  constructor(public dialogRef: MatDialogRef<DialogDeleteComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data,) { 
    this.city = {...data.city};
  }

  ngOnInit() {
  }

  doAction(){
    this.dialogRef.close({event:true});
  }

  closeDialog(){
    this.dialogRef.close({event:false});
  }
}
