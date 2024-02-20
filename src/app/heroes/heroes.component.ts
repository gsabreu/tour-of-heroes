import { Component } from '@angular/core';
import { Hero } from '../hero';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [
    UpperCasePipe,
    FormsModule,
  ],
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}