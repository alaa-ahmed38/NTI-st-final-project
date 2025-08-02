import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data';
import { TestimonialsPageData } from '../../models/testimonial';

@Component({
  selector: 'app-testimonials',
  standalone: false,

  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.scss']
})
export class TestimonialsComponent implements OnInit {

  public testimonialsData!: TestimonialsPageData;

  createArray(length: number): any[] {
    return new Array(length);
  }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.testimonialsData = this.dataService.getTestimonialsData();
  }
}