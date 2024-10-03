import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { EventListComponent } from './event-list/event-list.component';

export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'events', component: EventListComponent },
  { path: '**', redirectTo: '' }
];