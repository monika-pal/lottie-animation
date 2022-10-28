import { animation } from '@angular/animations';
import { Component,ChangeDetectionStrategy, NgZone, ChangeDetectorRef } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // standalone: true,
  // imports: [LottieComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Lottie animation';

  options1: AnimationOptions = {
    path: 'https://assets5.lottiefiles.com/datafiles/zc3XRzudyWE36ZBJr7PIkkqq0PFIrIBgp4ojqShI/newAnimation.json',
    loop: false,
    autoplay:true,
    
  };
  options2: AnimationOptions = {
    ...this.options1,
    path: 'https://assets9.lottiefiles.com/datafiles/gUENLc1262ccKIO/data.json',
    
  };
  options3: AnimationOptions = {
    ...this.options1,
    path: 'https://assets9.lottiefiles.com/datafiles/MUp3wlMDGtoK5FK/data.json',
    
  };
  options4: AnimationOptions = {
    ...this.options1,
    path: 'https://assets9.lottiefiles.com/packages/lf20_PBgNop.json',
    
  };
  private animationItem1?: AnimationItem;
  private animationItem2?: AnimationItem;
  private animationItem3?: AnimationItem;
  private animationItem4?: AnimationItem;
  // onLoopCompleteCalledTimes = 3;

  constructor(private ngZone: NgZone, private ref: ChangeDetectorRef){

  }
  animationCreated1(animationItem: AnimationItem): void {
    this.animationItem1 = animationItem;
  }
  animationCreated2(animationItem: AnimationItem): void {
    this.animationItem2 = animationItem;
  }
  animationCreated3(animationItem: AnimationItem): void {
    this.animationItem3 = animationItem;
  }
  animationCreated4(animationItem: AnimationItem): void {
    this.animationItem4 = animationItem;
  }
  onLoopComplete(): void {
    setTimeout(() => {
      this.animationItem1?.goToAndPlay(1,true);
      this.animationItem2?.goToAndStop(30,true);
      this.animationItem3?.goToAndStop(30,true);
      this.animationItem4?.goToAndStop(30,true);
   
    }, 2000);
    setTimeout(() => {
      this.animationItem2?.goToAndPlay(1,true);
      this.animationItem1?.goToAndStop(30,true)
      this.animationItem3?.goToAndStop(30,true)
      this.animationItem4?.goToAndStop(30,true)
    
    }, 6000);
    setTimeout(() => {
      this.animationItem3?.goToAndPlay(1,true);
      this.animationItem1?.goToAndStop(30,true)
      this.animationItem2?.goToAndStop(30,true)
      this.animationItem4?.goToAndStop(30,true)
    
    }, 10000);
    setTimeout(() => {
      this.animationItem4?.goToAndPlay(1,true);
      this.animationItem1?.goToAndStop(30,true)
      this.animationItem2?.goToAndStop(30,true)
      this.animationItem3?.goToAndStop(30,true)
   
    }, 14000);
   
  }


 
 
  ngOnInit(){
    this.onLoopComplete();
    setInterval(()=>{
      this.onLoopComplete()
    },15000)
    
  
  }


}
