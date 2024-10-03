import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: 'search-bar.component.html',
  styleUrl: 'search-bar.component.css'
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>();
  searchTerm: string = '';

  onSearch() {
    console.log('Search term:', this.searchTerm); 
    this.search.emit(this.searchTerm);
  }
}