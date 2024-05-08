import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styles: [
  ]
})
export class Demo3Component {
  @ViewChild("button1") button1: ElementRef | any;
  checked : boolean=false;
  button1Clicked!: Observable<any>;
  button1Subscription!: Subscription;
 ngAfterViewInit(): void {
    this.button1Clicked = fromEvent<any>(this.button1.nativeElement, 'click');
  }
  onChange( ) {
    console.log(this.checked);
    if (this.checked)
    {
      this.button1Subscription = this.button1Clicked.subscribe({
        next: value => alert('OK')
      });      
    }
    else
      this.button1Subscription.unsubscribe();
  }

}
