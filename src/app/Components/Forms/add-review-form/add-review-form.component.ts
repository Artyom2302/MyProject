import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-review-form',
  templateUrl: './add-review-form.component.html',
  styleUrls: ['./add-review-form.component.css']
})
export class AddReviewFormComponent {
  AddReviewForm : FormGroup = new FormGroup({
    "text": new FormControl(""),
    "score": new FormControl(5),
  });
  constructor(
    private dialogRef: MatDialogRef<AddReviewFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {},
    private snackBar: MatSnackBar
  ) {}

  OnAdd() {
    const text = this.AddReviewForm.get('text')!.value;
    const score = this.AddReviewForm.get('score')!.value;

    if (text=="") {
      this.snackBar.open('Text is required', 'Close', {
        duration: 3000,
        panelClass: 'snackbar-top'
      });
      return;
    }

    if (score < 1 || score > 5) {
      this.snackBar.open('Score must be between 1 and 5', 'Close', {
        duration: 3000,
        panelClass: 'snackbar-top'
      });
      return;
    }

    const data = { text:text, score:score };
    this.dialogRef.close(data);
  }


}
