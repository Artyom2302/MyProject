import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {LabsService} from "../../../../services/labs.service";
import {MatDialog} from "@angular/material/dialog";
import {AddLabFormComponent} from "../../Forms/add-lab-form/add-lab-form.component";


@Component({
  selector: 'app-add-lab',
  templateUrl: './add-lab.component.html',
  styleUrls: ['./add-lab.component.css']
})


export class AddLabComponent {
  constructor(private labService:LabsService) {
  }
  @Input() isCard!:boolean;
  @Output() Add=new EventEmitter();
  AddForm: FormGroup = new FormGroup({
    "labName": new FormControl(""),
    "mainStack": new FormControl(""),
  });
  OnAdd(){
    //
    //  let lab:any={
    //     labName: this.AddForm.get("labName")!.value,
    //     mainStack: this.AddForm.get("mainStack")!.value
    // }
    this.Add.emit();
  }
}
