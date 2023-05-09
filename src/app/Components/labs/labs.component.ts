import { Component } from '@angular/core';
import {Lab} from "./lab/lab.component";
import {LabsService} from "../../../services/labs.service";
import {AuthoriseService} from "../../../services/authorise.service";



@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent {
  constructor(private labService:LabsService,private userServise:AuthoriseService) {
  }
  async ngOnInit() {
   this.Labs = await this.labService.GetLabs(this.userid);
  }

  userid:number=1;
  public Labs:Lab[]=[
  ];

  showAll():void{
    console.log(this.Labs);
  }
  DeleteLab(id:number):void{
    const index = this.Labs.findIndex(item => item.id === id);
    this.Labs.splice(index, 1);
    this.labService.DeleteLab(id);
  }

  DeleteReview(id:number):void{
    this.labService.DeleteReview(id);
  }

async SendReview(rev:any){
    this.labService.postReview(rev.labId, rev.text, rev.score).then(r => console.log("1324"));
  }

  async OnAddLab(lab:any){
      this.userServise.AddUserLab(this.userid,lab.labName,lab.mainStack).catch(r => {

        }
      )
    this.Labs = await this.labService.GetLabs(this.userid);
  }

  protected readonly name = name;
}


