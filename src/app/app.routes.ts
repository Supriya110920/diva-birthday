import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { CelebrationComponent } from './celebration/celebration';
import { CelebrateComponent } from './celebrate/celebrate';
import { NoteComponent } from './note/note';
import { HomeComponent } from './home/home';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'celebration', component: CelebrationComponent },
  { path: 'celebrate', component: CelebrateComponent },
  { path: 'note', component: NoteComponent },
  { path: 'home', component: HomeComponent }
];
