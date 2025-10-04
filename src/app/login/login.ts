import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  id = '';
  password = '';
  private readonly STATIC_ID = 'diva';
  private readonly STATIC_PASSWORD = 'love26';

  constructor(private router: Router) {}

  login() {
    if (this.id === this.STATIC_ID && this.password === this.STATIC_PASSWORD) {
      this.router.navigate(['/celebration']);
    } else {
      alert('Invalid ID or Password!');
    }
  }
}
