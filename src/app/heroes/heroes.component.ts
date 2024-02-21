import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HEROES} from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [
    HeroDetailComponent,
    UpperCasePipe,
    FormsModule,
    NgFor,
    NgIf
  ],
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] =[];
  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService){}

  ngOnInit(): void {
    this.getHeroes()
  }


  getHeroes():void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}