import { Component } from '@angular/core';
import { Comp2Component } from '../comp2/comp2.component';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css'
})
export class Comp1Component {
  timerValue: number = 60;
  interval: Subscription;
  isRunning: boolean = false;


  startTimer(){
    if(!this.isRunning){
      this.isRunning = true;
      this.interval = interval(1000).subscribe(value =>{
        if(this.timerValue > 0){
          this.timerValue--
        }else{
          this.stopTimer();
        }
      })
    }
  }

  resetTimer(){
    this.stopTimer();
    this.timerValue = 60;
  }

  stopTimer(){
    this.interval.unsubscribe();
    this.isRunning = false;
  }

}
