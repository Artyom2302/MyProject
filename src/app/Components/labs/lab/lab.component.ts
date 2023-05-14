import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {MatDialog} from "@angular/material/dialog";
import {AddReviewFormComponent} from "../../Forms/add-review-form/add-review-form.component";
import {AddLabFormComponent} from "../../Forms/add-lab-form/add-lab-form.component";


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
    @Input() isCard!:boolean;
    @Output()
    DeleteLab=new EventEmitter();
    @Output()
    ChangeLabState=new EventEmitter();
    @Output()
    SendReview=new EventEmitter();

    @Output()
    DeleteReview=new EventEmitter();

  constructor(private dialog:MatDialog) {
  }
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
      const dialofRef=this.dialog.open(AddReviewFormComponent,{
      });
      dialofRef.afterClosed().subscribe(result=>{
        const data={labId:this.lab.id,text:result.text,score:result.score}
        this.SendReview.emit(data);
      })

    }
  onDoneChange(){
    this.ChangeLabState.emit(this.lab.id);
  }


  protected readonly blur = blur;
  protected readonly name = name;
}
