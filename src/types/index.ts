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
