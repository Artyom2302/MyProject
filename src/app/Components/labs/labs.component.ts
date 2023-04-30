import { Component } from '@angular/core';
import {Lab} from "./lab/lab.component";

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent {
  public Labs:Lab[]=[
    {
      name:"absdf",
      main_stack:"c++",
      date:new Date(),
      isDone:false,
      review:"12341324dafsf"
    },
    {
      name:"absdf41334",
      main_stack:"c++",
      date:new Date(),
      isDone:false,
      review:""
    },


  ];
  showAll():void{
    console.log(this.Labs);
  }
  DeleteLab(name:string):void{
    const index = this.Labs.findIndex(item => item.name === name);
    this.Labs.splice(index, 1);
  }

  protected readonly name = name;
}
