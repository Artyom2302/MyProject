import {Component, EventEmitter, Input, Output} from '@angular/core';

export interface Lab{
  name:string;
  main_stack:string;
  date:Date;
  isDone:boolean;
  review:string;
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
    review:string="";
    onDelete(){
      this.DeleteLab.emit(this.lab.name);
    };
}
