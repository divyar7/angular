import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  subtitle :string = "child to parent data"
  @Input() title:string;

  @Output() changetext = new EventEmitter<string>();

  setsubtitle(){
    this.changetext.emit(this.subtitle);
  }

  constructor() { }
  ngOnInit(): void {

  }

}
