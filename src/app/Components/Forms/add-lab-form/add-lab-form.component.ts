import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-add-lab-form',
  templateUrl: './add-lab-form.component.html',
  styleUrls: ['./add-lab-form.component.css']
})
export class AddLabFormComponent {
  AddForm : FormGroup = new FormGroup({
    "labName": new FormControl(),
    "mainStack": new FormControl(),
  });
  constructor(
    private dialogRef: MatDialogRef<AddLabFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{}) {
  }
  isCard:boolean=false ;

  OnAdd(){
    let labName=this.AddForm.get("labName")!.value;
    let mainStack=this.AddForm.get("mainStack")!.value;


    if (labName !="" && mainStack!=""){
      const data = { labName: labName, mainStack: mainStack };
      this.dialogRef.close(data);
    }
    else {
      alert("Enter values");
    }

  }

}
