import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-celebrate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './celebrate.html',
  styleUrl: './celebrate.css'
})
export class CelebrateComponent implements OnInit {
  showBalloons = false;

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => this.showBalloons = true, 1000);
  }

  goToNote() {
    this.router.navigate(['/note']);
  }
}
