import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data';
import { SkillsPageData } from '../../models/skill';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class SkillsComponent implements OnInit {

  public skillsPageData!: SkillsPageData;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.skillsPageData = this.dataService.getSkillsData();
  }
}
