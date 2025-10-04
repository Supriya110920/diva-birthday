import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './note.html',
  styleUrl: './note.css'
})
export class NoteComponent {}
