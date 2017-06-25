import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bla';
  looplength = 30;
  blips = new Array(0);
  constructor(){
    let index;
    for (index = 0; index < 10; index++) {
      this.blips.push(new Blip())
    }
  }
  toggleBlip(blip) {
    blip.toggle();
    console.log(blip);
  }
}

class Blip{
  on = false;
  toggle(){
    this.on = !this.on;
  }
  /*
  sound = "";
  constructor(sound){
    this.sound = sound;
  }


  play(){
    console.log("play",this.sound);
  }
  */
}
