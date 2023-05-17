import { Component } from '@angular/core';
import {Lab, Review} from "./lab/lab.component";
import {LabsService} from "../../../services/labs.service";
import {AuthoriseService} from "../../../services/authorise.service";
import {AddLabFormComponent} from "../Forms/add-lab-form/add-lab-form.component";
import {MatDialog,MatDialogRef,MatDialogModule} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent {
  constructor(private route: ActivatedRoute,private labService:LabsService,private userServise:AuthoriseService,private dialog:MatDialog,private snackBar: MatSnackBar) {
  }
  async ngOnInit() {

    this.route.params.subscribe(async params => {
      console.log(params['id'])
      this.userid = params['id'];
      this.Labs = await this.labService.GetLabs(this.userid);
    });



  }

  userid:number=0;
  public Labs:Lab[]=[
  ];
  isCard:boolean=false;
  OrderOption:string="";
  OrderDir:boolean=false;
  showAll():void{
    console.log(this.Labs);
  }
  DeleteLab(id:number):void{
    const index = this.Labs.findIndex(item => item.id === id);
    this.Labs.splice(index, 1);
    this.labService.DeleteLab(id);
  }
  Sort(propvalue:string,dir=false){
    let prop:keyof Lab;
    if (propvalue == "reviewText" || propvalue == "score") {
      prop = ("review."+propvalue) as keyof Lab;
    } else {
      prop = propvalue as keyof Lab;
    }
    console.log(prop);
    this.Labs=this.Labs.sort(function(a,b){
      console.log(a.review);
      console.log(b.review);
      let dirIf=a[prop]<b[prop] ;
      if (dir){
        dirIf=a[prop]>b[prop];
      }
      if (dirIf){
        return -1;
      }
      else{
        return 1;
      }
    })
  }

  DeleteReview(id:number):void{
    this.labService.DeleteReview(id);
  }

async SendReview(rev:any){
    this.labService.postReview(rev.labId,rev.text,rev.score).then(async r => {
        this.snackBar.open('Review added successfully', 'Close', {duration: 3000, verticalPosition: 'top'});
        this.Labs = await this.labService.GetLabs(this.userid);
      }

    );
  }

  async OnAddLab(){
    const dialofRef=this.dialog.open(AddLabFormComponent,{
    });
    dialofRef.afterClosed().subscribe(async (result) => {
      let resp = await this.userServise.AddUserLab(this.userid, result.labName, result.mainStack);
      if (resp == "Exist") {
        this.snackBar.open('Lab name exists', 'Close', {duration: 3000,verticalPosition: 'top'});
      } else {
        this.snackBar.open('Lab added successfully', 'Close', {duration: 3000,verticalPosition: 'top'});
        this.Labs = await this.labService.GetLabs(this.userid);
      }
    })
  }

  ChangeState(labId:number ){
      this.labService.ChangeLabState(labId);
  }
}


