import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCardComponent } from '../event-card/event-card.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule, EventCardComponent, SearchBarComponent],
  templateUrl: 'event-list.component.html',
  styleUrl: 'event-list.component.css'
})
export class EventListComponent implements OnInit {
  events: any[] = [];
  filteredEvents: any[] = [];

  ngOnInit() {
    // In a real app, you'd fetch this data from a service
    this.events = [
      { id: 1, title: 'Summer Music Fest', date: new Date('2024-07-15'), location: 'Central Park, NY', imageUrl: '/summer.jpg' },
      { id: 2, title: 'Rock the City', date: new Date('2024-08-22'), location: 'Downtown LA', imageUrl: '/rock.jpg' },
      { id: 3, title: 'Jazz Night', date: new Date('2024-06-30'), location: 'Blue Note, NYC', imageUrl: '/jazz.jpg' },
      { id: 4, title: 'EDM Explosion', date: new Date('2024-09-05'), location: 'Miami Beach', imageUrl: '/edm.jpg' },
    ];
    this.filteredEvents = this.events;
  }

  filterEvents(searchTerm: string) {
    console.log('Filtering events with term:', searchTerm); // Add this for debugging
    this.filteredEvents = this.events.filter(event => 
      event.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}