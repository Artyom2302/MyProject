import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {error} from "@angular/compiler-cli/src/transformers/util";


export interface Lab{
  id:number;
  name:string;
  main_stack:string;
  date:Date;
  isDone:boolean;
  review:{
    id:number;
    score:number;
    reviewText:string;
  };
}
export interface Review{
  labId:number;
  score:number;
  text:string;
}

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent {
    @Input() lab!:Lab;
    @Output()
    DeleteLab=new EventEmitter();
    @Output()
    SendReview=new EventEmitter();

    @Output()
    DeleteReview=new EventEmitter();

  ReviewForm: FormGroup = new FormGroup({
    "ReviewText": new FormControl(""),
    "Score": new FormControl(5),
  });
    onDeleteReview(){
      this.lab.review.reviewText="";
      this.lab.review.score=0;
      this.DeleteReview.emit(this.lab.id);

    };

  onDeleteLab(){

    this.DeleteLab.emit(this.lab.id);
  };
    OnLeaveReview(){
      if (this.ReviewForm.get("Score")!.value>5 || this.ReviewForm.get("Score")!.value<1){
        alert('Enter value between 1 and 5');
        return;
      }
      else {
          let rev:any= {
            labId: this.lab.id,
            text: this.ReviewForm.get("ReviewText")!.value,
            score: this.ReviewForm.get("Score")!.value
          }
          this.SendReview.emit(rev);
          this.lab.review.reviewText=rev.text;
          this.lab.review.score=rev.score;
          }



      }



}
