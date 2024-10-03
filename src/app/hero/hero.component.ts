// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterLink } from '@angular/router';

// @Component({
//   selector: 'app-hero',
//   standalone: true,
//   imports: [CommonModule, RouterLink],
//   templateUrl: './hero.component.html',
//   styleUrl: './hero.component.css'
// })
// export class HeroComponent {
//   fest = '/Festival Guide 2024-01.png'
// }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'] // Corrected styleUrls
})
export class HeroComponent {
  images = [
    { src: '/Festival Guide 2024-01.png', alt: 'Music Festivals Guide 2024' },
    { src: '/rock.jpg', alt: 'Concert Image 1' },
    { src: '/jazz.jpg', alt: 'Festival Image 2' }
  ];
  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}