import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {
    @Input() id!:number;
    @Input() Login!:String;
    url:string="/labs/";
    @Output() Authorise=new EventEmitter();
    ngOnInit(){
      console.log(this.id);
      this.url+=this.id;
    }
}
