
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../../services/data';
import { HeroData } from '../../models/hero';

declare var Typed: any;
declare var PureCounter: any;

@Component({
  selector: 'app-hero',
  standalone: false,

  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent implements OnInit, AfterViewInit {


  public heroData!: HeroData;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.heroData = this.dataService.getHeroData();
  }

  ngAfterViewInit(): void {
    if (this.heroData) {
      this.initTyped();
      new PureCounter();
    }
  }

  private initTyped(): void {
    const typedElement = document.querySelector('.typed');
    if (typedElement) {

      new Typed('.typed', {
        strings: this.heroData.typedStrings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }
  }
}