import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [CommonModule]
})
export class HomeComponent implements OnInit {

  images: string[] = [
    'images/us1.jpg',
    'images/us2.jpg',
    'images/us3.jpg',
    'images/us4.jpg'
  ];

  currentIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3500); // 3.5s per slide
  }
}
