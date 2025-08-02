import { Component, HostListener, Renderer2 } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent {
  isScrolled = false;
  activeSection = 'hero';

  constructor(
    private viewportScroller: ViewportScroller,
    private renderer: Renderer2
  ) {}

 
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 100;

    this.updateActiveSection();
  }

 
  public scrollTo(sectionId: string): void {
    this.renderer.removeClass(document.body, 'mobile-nav-active');
    
    this.viewportScroller.scrollToAnchor(sectionId);
  }

  public toggleMobileNav(): void {
    const body = document.body;
    if (body.classList.contains('mobile-nav-active')) {
      this.renderer.removeClass(body, 'mobile-nav-active');
    } else {
      this.renderer.addClass(body, 'mobile-nav-active');
    }
  }


  private updateActiveSection(): void {
    const sections = ['hero', 'about', 'skills', 'portfolio', 'testimonials', 'contact'];
    const offset = 150; 

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom >= offset) {
          this.activeSection = sectionId;
          return; 
        }
      }
    }
  }
}