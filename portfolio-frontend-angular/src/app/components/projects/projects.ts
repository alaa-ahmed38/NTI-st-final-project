import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data';
import { Project, Filter } from '../../models/project';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent implements OnInit {
  
  public projects: Project[] = [];
  public filters: Filter[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    const projectsPageData = this.dataService.getProjectsData();

    this.projects = projectsPageData.projects;
    this.filters = projectsPageData.filters;
  }
}