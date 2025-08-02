
export interface Project {
  id: number;
  title: string;
  category: string;
  filterClass: string;
  imageUrl: string;
  detailsUrl: string;
}

export interface Filter {
  name: string;
  filterValue: string;
}

export interface ProjectsPageData {
  projects: Project[];
  filters: Filter[];
}