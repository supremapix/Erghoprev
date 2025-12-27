
export interface Service {
  id: number;
  title: string;
  description: string;
  detailedContent: string;
  icon?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GallerySlide {
  image: string;
  title: string;
  description: string;
  ctaText: string;
}

export interface TimelineStep {
  title: string;
  description: string;
  label: string;
}
