export interface StatItem {
  value: number;
  label: string;
}

export interface ActionButton {
  text: string;
  link: string;
  isPrimary: boolean; 
}

export interface SocialLink {
  iconClass: string; 
  url: string;
}

export interface FloatingCard {
  iconClass: string;
  text: string;
}
export interface HeroData {
  typedStrings: string[];
  lead: string;
  stats: StatItem[];
  actions: ActionButton[];
  socialLinks: SocialLink[];
  imageUrl: string;
  floatingCards: FloatingCard[];
}
