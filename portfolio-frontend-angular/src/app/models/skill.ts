export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillCategory {
  name: string;
  iconClass: string; 
  skills: Skill[];
}

export interface SkillStat {
  iconClass: string;
  count: number;
  label: string;
}

export interface SkillBadge {
  name: string;
}

export interface SkillsPageData {
  categories: SkillCategory[];
  summary: {
    title: string;
    description: string;
    stats: SkillStat[];
    badges: SkillBadge[];
  };
}