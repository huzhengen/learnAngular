import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-tour-of-heroes',
  templateUrl: './tour-of-heroes.component.html',
  styleUrls: ['./tour-of-heroes.component.css']
})
export class TourOfHeroesComponent implements OnInit {
  heroes: Hero[];

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }

  constructor(private heroService: HeroService ) { }

  ngOnInit() {
    this.getHeroes();
  }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  //   console.log(this.heroes);
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
