import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-celebrate',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './celebrate.html',
  styleUrl: './celebrate.css'
})
export class CelebrateComponent implements OnInit {
  showBalloons = false;

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => this.showBalloons = true, 1000);
  }

}
