import { Component, OnInit,Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-szczegoly',
  templateUrl: './szczegoly.component.html',
  styleUrls: ['./szczegoly.component.css']
})
export class SzczegolyComponent implements OnInit {

  constructor() { }
  @Input() todoSzcz!:Todo;
  ngOnInit(): void {
  }

}
