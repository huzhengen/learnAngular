import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-tour-of-heroes',
  templateUrl: './tour-of-heroes.component.html',
  styleUrls: ['./tour-of-heroes.component.css']
})
export class TourOfHeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes = HEROES;

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }

  constructor() { }

  ngOnInit() {
    console.log(this.selectedHero);
  }

}
