import { Injectable } from '@angular/core';
import { HeroData } from '../models/hero'
import { SkillsPageData } from '../models/skill'; 
import { ProjectsPageData, Project, Filter } from '../models/project'; 
import { TestimonialsPageData } from '../models/testimonial';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  
private heroInfo: HeroData = {
      typedStrings: [
        'ALaa Ahmed Ragab',
        'MEAN Stack Developer',
        'Creative Programmer'
      ],
      lead: 'I build scalable, high-performance web applications using Angular, Node.js, Express.js, and MongoDB  — turning ideas into clean, functional, and user-friendly solutions.',
      stats: [
        { value: 3, label: 'Projects Completed' },
        { value: 1, label: 'Years Experience' },
        { value: 3, label: 'Happy Clients' }
      ],
      actions: [
        { text: 'View My Work', link: '#portfolio', isPrimary: true },
        { text: 'Get In Touch', link: '#contact', isPrimary: false }
      ],
      socialLinks: [
        { iconClass: 'bi bi-github', url: 'https://github.com/alaa-ahmed38' },
        { iconClass: 'bi bi-linkedin', url: 'https://www.linkedin.com/in/alaa-ahmed-275636274/' }
      ],
      imageUrl: '../../assets/template/img/profile/my-profile-pic.jpg',
      floatingCards: [
        { iconClass: 'bi bi-braces', text: 'MEAN Stack' },
        { iconClass: 'bi bi-code-slash', text: 'Development' },
        { iconClass: 'bi bi-lightbulb', text: 'Creative Ideas' }
      ]
    };

private skillsData: SkillsPageData = {
  categories: [
    {
      name: 'Frontend Development',
      iconClass: 'bi bi-braces',
      skills: [
        { name: 'HTML/CSS', percentage: 95 },
        { name: 'JavaScript', percentage: 88 },
        { name: 'Angular', percentage: 92 },
      ]
    },
    {
      name: 'Backend Development',
      iconClass: 'bi bi-database-gear',
      skills: [
        { name: 'Node.js', percentage: 90 },
        { name: 'Express', percentage: 75 },
        { name: 'MongoDB', percentage: 85 },
      ]
    },
    {
      name: 'Version Control & Coding',
      iconClass: 'bi bi-cloud-arrow-up',
      skills: [
        { name: 'Git & GitHub', percentage: 75 },
        { name: 'Clean Code', percentage: 80 },
        { name: '', percentage: 80 },
      ]
    },
    {
      name: 'Soft Skills',
      iconClass: 'bi bi-pencil-ruler',
      skills: [
        { name: 'Commmunications', percentage: 100 },
        { name: 'Supportive', percentage: 100 },
        { name: 'Helpful', percentage: 100 },
      ]
    }
  ],
  summary: {
    title: 'Professional Expertise',
    description: 'As a MEAN Stack developer, I craft complete web applications that are not only functional but also optimized for performance, security, and user experience.',
    stats: [
      { iconClass: 'bi bi-briefcase', count: 1, label: 'Years Experience' },
      { iconClass: 'bi bi-check2-circle', count: 3, label: 'Projects Completed' },
      { iconClass: 'bi bi-people', count: 3, label: 'Happy Clients' }
    ],
    badges: [
      { name: 'NTI MEAN Certified' },
      { name: 'HTML&CSS Mahara Tech' }

    ]
  }
};

private projectsData: ProjectsPageData = {
  projects: [
    {
      id: 1,
      title: 'Restaurant Website',
      category: 'Front End',
      filterClass: 'filter-frontend',
      imageUrl: '../../assets/template/img/project/Screenshot 2025-07-31 090936.png', 
      detailsUrl: 'https://my-second-html-css-project.vercel.app/'
    },
    {
      id: 2,
      title: 'Landing Page',
      category: 'Front End',
      filterClass: 'filter-frontend',
      imageUrl: '../../assets/template/img/project/Screenshot 2025-07-31 090328.png',
      detailsUrl: 'https://my-first-html-css-project-self.vercel.app/'
    },
    {
      id: 3,
      title: 'Coffee Page',
      category: 'Front End',
      filterClass: 'filter-frontend',
      imageUrl: '../../assets/template/img/project/Screenshot 2025-07-31 091522.png', 
      detailsUrl: 'https://coffee-umber-omega.vercel.app/'
    }
  ],
  filters: [
    { name: 'All Projects', filterValue: '*' },
    { name: 'Front End', filterValue: '.filter-frontend' },
    { name: 'Back End', filterValue: '.filter-backend' },
    { name: 'Development', filterValue: '.filter-development' }
  ]
};
private testimonialsData: TestimonialsPageData = {
  userTestimonials: [
    {
      quote: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Cras ultricies ligula sed magna dictum porta.',
      imageUrl: '../../assets/template/img/person/person-f-1.webp',
      name: 'Emily Davis',
      title: 'Literary Reviewer',
      rating: 4
    },
    {
      quote: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Cras ultricies ligula sed magna dictum porta.',
      imageUrl: '../../assets/template/img/person/person-m-2.webp',
      name: 'Robert Wilson',
      title: 'Literary Reviewer',
      rating: 5
    },
    {
      quote: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Cras ultricies ligula sed magna dictum porta.',
      imageUrl: '../../assets/template/img/person/person-f-3.webp',
      name: 'Jane Smith',
      title: 'Literary Reviewer',
      rating: 5
    }
  ],
  overallRating: {
    ratingValue: 4.8,
    totalReviews: 230,
    platforms: ['Goodreads', 'Amazon', 'Barnes & Noble']
  }
};


constructor() { }

getHeroData(): HeroData {
  return this.heroInfo;
}  

getSkillsData(): SkillsPageData {
  return this.skillsData;
}

getProjectsData(): ProjectsPageData {
  return this.projectsData;
}

getTestimonialsData(): TestimonialsPageData {
  return this.testimonialsData;
}


}

