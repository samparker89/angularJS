import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { OnInit } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl:'app/heroes.component.html',
    styleUrls:['app/heroes.component.css']
})

export class HeroesComponent implements OnInit{
    title = 'My Heroes';
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
      private heroService: HeroService,
      private router: Router
    ) {};

    onSelect(hero : Hero) {
       this.selectedHero = hero;
    }

    getHeroes() {
       this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    gotoDetail() {
       this.router.navigate(['/detail', this.selectedHero.id]);
    }

    ngOnInit(){
        this.getHeroes();
    }
}
