import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-reusable-table',
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.css']
})
export class ReusableTableComponent implements OnChanges {

  @Input() datos : any;
  @Input() columnas: any;
  //@Input() buttons : boolean = false;
  @Input() buttonNames : string[] |undefined;
  @Output() parentMethod = new EventEmitter<any>();

  

  constructor() { }

  ngOnChanges(){



  }

  pressedbtn(namefunction:string,object:any){
   
    this.parentMethod.emit([namefunction,object])
    

  }

}
