import { Injectable } from '@angular/core';

let sampleset = {
  title : 'bla',
  nrOfBlips : 24,
  nrOfTracks: 0,
  folder:'./assets/set1/',
  tracks:[
    {
      name:'ploink',
      file:'ploink.mp3'
    },{
      name:'bleep',
      file:'bleep.mp3'
    },{
      name: 'Claps 1',
      file: 'Claps 1.mp3'
    },{
      name: 'Claps 2',
      file: 'Claps 2.mp3'
    },{
      name: 'Crash 1',
      file: 'Crash 1.mp3'
    },{
      name: 'Crash 2',
      file: 'Crash 2.mp3'
    },{
      name: 'Hi Hat Closed 1',
      file: 'Hi Hat Closed 1.mp3'
    },{
      name: 'Hi Hat Closed 2',
      file: 'Hi Hat Closed 2.mp3'
    },{
      name: 'Hi Hat Open 1',
      file: 'Hi Hat Open 1.mp3'
    },{
      name: 'Hi Hat Open 2',
      file: 'Hi Hat Open 2.mp3'
    }
]
};

@Injectable()
export class SamplesetService {

  constructor() { }

  get(){
    sampleset.nrOfTracks = sampleset.tracks.length;
    return sampleset;
  }
}
