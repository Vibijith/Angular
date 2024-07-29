import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, Directive, ElementRef } from '@angular/core';
import { HighlightDirective } from '../../highlight.directive';
import { CardListComponent } from "../../ui/card-list/card-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UpperCasePipe, DatePipe, HighlightDirective, CardListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // constructor() {
  //   this.currentDateTime = new Date().toLocaleString();
  // }
  // text = 'Vibijith'
  date:number = Date.now()

  
}
