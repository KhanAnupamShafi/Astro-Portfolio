export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
};

export type ProjectLink = {
  label: string;
  href: string;
  icon?: "external";
};

export type FeaturedProject = {
  title: string;
  description: string;
  techStack: string[];
  links: ProjectLink[];
  mockupUrl: string;
  browserUrl: string;
  imageSeed: string;
};

export type HomePageData = {
  name: string;
  title: string;
  bio: string;
  availability: string;
  timezone: string;
  socialLinks: SocialLink[];
  featuredProjects: FeaturedProject[];
};

export type SkillCategory = {
  title: string;
  skills: string;
};

export type WorkExperience = {
  dateRange: string;
  role: string;
  company: string;
  summary: string;
  highlights?: string[];
};

export type AboutPageData = {
  name: string;
  title: string;
  bio: string;
  initials: string;
  location: string;
  availability: string;
  socialLinks: SocialLink[];
  skillCategories: SkillCategory[];
  experience: WorkExperience[];
};

export type ProjectMockupVariant =
  | "grid-short"
  | "grid-full"
  | "grid-medium"
  | "bars-short-full"
  | "bars-medium-short"
  | "bars-full-short";

export type CaseStudySection = {
  title: string;
  content: string;
};

export type ProjectLinks = {
  github?: string;
  live?: string;
};

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  techStack: string[];
  browserUrl: string;
  mockupVariant: ProjectMockupVariant;
  role: string;
  timeline: string;
  links: ProjectLinks;
  heroBrowserUrl: string;
  sections: CaseStudySection[];
};
