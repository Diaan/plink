import { Component, OnInit } from '@angular/core';
import { SamplesetService } from './sampleset/sampleset.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SamplesetService]
})
export class AppComponent implements OnInit{
  looplength = 5;
  private sampleset;
  public tracks = new Array(0);
  private playInterval;
  public playHead;

  constructor(private samplesetService : SamplesetService){
  }
  ngOnInit() {
    this.renderTracks();
  }
  renderTracks(){
    this.sampleset = this.samplesetService.get();
    
    for (let index = 0; index < this.sampleset.nrOfTracks; index++) {
      this.tracks.push(new Track(this.sampleset.tracks[index],this.sampleset.nrOfBlips,this.sampleset.folder))
    }
    
    this.playHead = new PlayHead(this.looplength*1000/this.sampleset.nrOfBlips);
  }

  toggleBlip(blip) {
    blip.toggle();
  }
  playPlink(){
    let currentposition = this.playHead.move(this.sampleset.nrOfBlips);
    for (let index = 0; index < this.sampleset.nrOfTracks; index++) {
      this.tracks[index].playBlipsAt(currentposition)
    }
  }
  startPlink(){
    if(typeof this.playInterval=='undefined'||this.playInterval==null){
      this.playInterval = setInterval(function(){
        this.playPlink()
      }.bind(this),this.looplength*1000/this.sampleset.nrOfBlips)
    }else{
      console.log('already playing');
    }
  }
  stopPlink(){
    clearInterval(this.playInterval);
    this.playInterval = null;
  }
  pausePlink(){

  }
}

class PlayHead{
  private blipPosition;
  private position;
  private animationLength;
  private animLen;
  constructor(animationLength){
    this.blipPosition = 0;
    this.position = 0;
    this.animLen = animationLength;
    this.animationLength = animationLength+'ms';
  }
  move(nrOfBlips){
    if(this.blipPosition==nrOfBlips-1){
      this.position = 0;
      this.blipPosition = 0;
      return this.blipPosition;
    }else{
      this.position += 100/nrOfBlips;
      this.blipPosition++
      return this.blipPosition-1;
    }
  }
}

class Track{
  private blips = new Array(0);
  public name;
  constructor(track,nrOfBlips,folder){
    this.name = track.name;
    for (let index = 0; index < nrOfBlips; index++) {
      this.blips.push(new Blip(folder+track.file))
    }
  }
  playBlipsAt(index){
    this.blips[index].play()
  }
}

class Blip{
  public file;
  public audio;
  public on = false;
  constructor(file){
    this.file = file;
    this.audio = new Audio(file);
    this.audio.load();
  }

  toggle(){
    this.on = !this.on;
  }
  play(){
    if(this.on){
      this.audio.play();
    }
  }
}
