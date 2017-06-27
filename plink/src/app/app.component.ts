import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bla';
  looplength = 5;
  nrOfTracks = 1;
  nrOfBlips = 2;
  track = {};
  private playInterval;
  public playHead;

  constructor(){
    this.track = new Track(this.nrOfBlips);
    this.playHead = new PlayHead(this.looplength*1000/this.nrOfBlips);
  }

  toggleBlip(blip) {
    blip.toggle();
  }
  playPlink(){
    if(typeof this.playInterval=='undefined'){
      this.playHead.move(this.nrOfBlips);
      this.playInterval = setInterval(function(){
        this.playHead.move(this.nrOfBlips);
      }.bind(this),this.looplength*1000/this.nrOfBlips)
    }else{
      console.log('already playing');
    }
  }
  stopPlink(){
    clearInterval(this.playInterval);
  }
  pausePlink(){

  }
}

class PlayHead{
  private position;
  private animationLength;
  private animLen;
  constructor(animationLength){
    this.position = 0;
    this.animLen = animationLength;
    this.animationLength = animationLength+'ms';
  }
  move(nrOfBlips){
    console.log(this.position,this.animationLength)
    /*if(this.position==100){
      this.animationLength = '0s';
      this.position = 0;
    }*/
    if(this.position+100/nrOfBlips>=100){
     this.position = 0;
      this.animationLength = this.animLen+'ms';
    }else{
      this.position += 100/nrOfBlips;
      //this.animationLength = this.animLen+'ms';
    }
  }
}

class Track{
  blips = new Array(0);
  constructor(nrOfBlips){
    for (let index = 0; index < nrOfBlips; index++) {
      this.blips.push(new Blip())
    }
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
