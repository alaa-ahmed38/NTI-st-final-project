export interface UserTestimonial {
  quote: string;
  imageUrl: string;
  name: string;
  title: string;
  rating: number; 
}

export interface OverallRating {
  ratingValue: number;
  totalReviews: number;
  platforms: string[];
}

export interface TestimonialsPageData {
  userTestimonials: UserTestimonial[];
  overallRating: OverallRating;
}