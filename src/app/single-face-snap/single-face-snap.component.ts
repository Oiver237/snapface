import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snap.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  bouton!: string;

  constructor(private faceSnapService: FaceSnapsService,
              private route: ActivatedRoute){};
 

  ngOnInit(){
   
    this.bouton = 'Oh snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
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
