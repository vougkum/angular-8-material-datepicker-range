import { Component, OnInit,ViewChild } from "@angular/core";
import {MatMenuTrigger} from '@angular/material/menu'
import { FormBuilder, FormGroup, FormControl,Validators } from "@angular/forms";

import { delay, startWith } from "rxjs/operators";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular";
  date=new Date('2020-04-12')
  control=new FormControl({from:this.date,to:new Date(this.date.getTime()+2*24*60*60*1000)},Validators.required)
  ngOnInit(){

  }
}
