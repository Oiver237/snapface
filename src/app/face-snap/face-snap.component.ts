import { Component, OnInit, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

  @Input() faceSnap!: FaceSnap;

  bouton!: string;

  constructor(private faceSnapService: FaceSnapsService,
              private router: Router){};
 

  ngOnInit(){
   
    this.bouton = 'Oh snap!';
  }
  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
}
    onClickButton(){
      if (this.bouton === 'Oh snap!'){
        this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
        this.bouton = 'Oups unsnap..'
      }
      else{
        this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
        this.bouton = 'Oh snap!';
      }


    }
}
