import type { PortableTextBlock } from "@portabletext/types";
import type { SanityImageSource } from "@sanity/image-url";

export type SanityImage = SanityImageSource;

export type SanityFileAsset = {
  url: string;
  originalFilename?: string;
  mimeType?: string;
};

export type SanityFile = {
  asset?: SanityFileAsset;
};

export type ResumeDownload = {
  url: string;
  filename: string;
};

export type SanityAboutDocument = {
  name: string;
  title: string;
  bio: string;
  initials: string;
  location?: string;
  timezone?: string;
  email?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  availability?: string;
  resume?: SanityFile;
  skillCategories?: SkillCategory[];
  photo?: SanityImage;
};

export type SanityExperienceDocument = {
  _id: string;
  role: string;
  company: string;
  companyUrl?: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description?: string;
  highlights?: string[];
  techStack?: string[];
};

export type SanityProjectListItem = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  techStack?: string[];
  coverImage?: SanityImage;
  liveUrl?: string;
  githubUrl?: string;
};

export type SanityProjectDocument = SanityProjectListItem & {
  longDescription?: PortableTextBlock[];
};

export type SanityPostDocument = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  thumbLabel: string;
  author?: string;
  excerpt: string;
  tags?: string[];
  coverImage?: SanityImage;
  body?: PortableTextBlock[];
};

export type SanityCertificateDocument = {
  _id: string;
  title: string;
  issuer: string;
  issuedAt: string;
  iconLabel: string;
  credentialUrl?: string;
  image?: SanityImage;
};

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
  coverImageUrl?: string;
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
  links: ProjectLinks;
  coverImageUrl?: string;
  bodyHtml?: string;
  browserUrl?: string;
  mockupVariant?: ProjectMockupVariant;
  role?: string;
  timeline?: string;
  heroBrowserUrl?: string;
  sections?: CaseStudySection[];
  ogImageUrl?: string;
};

export type Certificate = {
  iconLabel: string;
  title: string;
  issuer: string;
  dateLabel: string;
  credentialUrl?: string;
  imageUrl?: string;
};

export type BlogPost = {
  slug: string;
  thumbLabel: string;
  publishedAt: string;
  title: string;
  author?: string;
  excerpt: string;
  tags: string[];
  bodyHtml: string;
  coverImageUrl?: string;
  ogImageUrl?: string;
};
