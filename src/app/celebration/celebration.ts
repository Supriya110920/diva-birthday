import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-celebration',
  templateUrl: './celebration.html',
  styleUrls: ['./celebration.css'],
  imports: [CommonModule,RouterModule]
})
export class CelebrationComponent implements OnInit {
  countdown: number = 10;
  images = [
    'images/diva1.jpg',
    'images/diva2.jpg',
    'images/diva3.jpg',
    'images/diva4.jpg',
    'images/diva5.jpg',
    'images/diva6.jpg',
    'images/diva7.jpg',
    'images/diva8.jpg',
    'images/diva9.jpg',
    'images/diva10.jpg',

  ];
  currentImage = 0;

  ngOnInit() {
    const interval = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        clearInterval(interval);
        this.startSlideshow();
      }
    }, 1000);
  }

  startSlideshow() {
    setInterval(() => {
      this.currentImage = (this.currentImage + 1) % this.images.length;
    }, 3000);
  }
}
