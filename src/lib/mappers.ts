import { urlFor } from "@/lib/sanity";
import { buildOgImageUrl } from "@/lib/seo";
import {
  formatDateRange,
  formatMonthYear,
  portableTextToHtml,
} from "@/lib/utils";
import type {
  BlogPost,
  Certificate,
  FeaturedProject,
  Project,
  ProjectLink,
  SanityAboutDocument,
  SanityCertificateDocument,
  SanityExperienceDocument,
  SanityPostDocument,
  SanityProjectDocument,
  SanityProjectListItem,
  SkillCategory,
  SocialLink,
  WorkExperience,
} from "@/types";

export const buildSocialLinks = (about: SanityAboutDocument): SocialLink[] => {
  const links: SocialLink[] = [];

  if (about.githubUrl) {
    links.push({ label: "GitHub", href: about.githubUrl, icon: "github" });
  }

  if (about.linkedinUrl) {
    links.push({
      label: "LinkedIn",
      href: about.linkedinUrl,
      icon: "linkedin",
    });
  }

  if (about.email) {
    links.push({ label: "Email", href: `mailto:${about.email}`, icon: "mail" });
  }

  return links;
};

export const mapSkillCategories = (
  categories: SkillCategory[] | null | undefined,
): SkillCategory[] => categories ?? [];

export const mapExperience = (
  items: SanityExperienceDocument[],
): WorkExperience[] =>
  items.map((item) => ({
    role: item.role,
    company: item.company,
    summary: item.description ?? "",
    highlights: item.highlights ?? undefined,
    dateRange: formatDateRange(
      item.startDate,
      item.endDate ?? null,
      item.current ?? false,
    ),
  }));

export const mapFeaturedProject = (
  project: SanityProjectListItem,
): FeaturedProject => {
  const links: ProjectLink[] = [
    { label: "Case study", href: `/projects/${project.slug}` },
  ];

  if (project.githubUrl) {
    links.push({ label: "GitHub", href: project.githubUrl, icon: "external" });
  }

  if (project.liveUrl) {
    links.push({ label: "Live demo", href: project.liveUrl, icon: "external" });
  }

  return {
    title: project.title,
    description: project.description,
    techStack: project.techStack ?? [],
    links,
    mockupUrl: project.liveUrl ?? "",
    browserUrl: project.liveUrl ?? project.slug,
    imageSeed: project.slug,
    coverImageUrl: project.coverImage
      ? urlFor(project.coverImage).width(800).height(500).format("webp").url()
      : undefined,
  };
};

export const mapProjectListItem = (
  project: SanityProjectListItem,
): Project => ({
  slug: project.slug,
  title: project.title,
  shortDescription: project.description,
  description: project.description,
  techStack: project.techStack ?? [],
  links: {
    github: project.githubUrl ?? undefined,
    live: project.liveUrl ?? undefined,
  },
  coverImageUrl: project.coverImage
    ? urlFor(project.coverImage).width(800).height(450).format("webp").url()
    : undefined,
  browserUrl: project.liveUrl ?? project.slug,
  mockupVariant: "grid-short",
});

export const mapProjectDetail = (project: SanityProjectDocument): Project => ({
  slug: project.slug,
  title: project.title,
  shortDescription: project.description,
  description: project.description,
  techStack: project.techStack ?? [],
  links: {
    github: project.githubUrl ?? undefined,
    live: project.liveUrl ?? undefined,
  },
  coverImageUrl: project.coverImage
    ? urlFor(project.coverImage).width(1200).height(675).format("webp").url()
    : undefined,
  ogImageUrl: buildOgImageUrl(project.coverImage),
  bodyHtml: portableTextToHtml(project.longDescription),
});

export const mapBlogPost = (post: SanityPostDocument): BlogPost => ({
  slug: post.slug,
  thumbLabel: post.thumbLabel,
  publishedAt: post.publishedAt,
  title: post.title,
  author: post.author,
  excerpt: post.excerpt,
  tags: post.tags ?? [],
  bodyHtml: portableTextToHtml(post.body),
  coverImageUrl: post.coverImage
    ? urlFor(post.coverImage).width(1200).auto("format").format("webp").url()
    : undefined,
  ogImageUrl: buildOgImageUrl(post.coverImage),
});

export const mapBlogPostListItem = (post: SanityPostDocument): BlogPost => ({
  slug: post.slug,
  thumbLabel: post.thumbLabel,
  publishedAt: post.publishedAt,
  title: post.title,
  author: post.author,
  excerpt: post.excerpt,
  tags: post.tags ?? [],
  bodyHtml: "",
  coverImageUrl: post.coverImage
    ? urlFor(post.coverImage)
        .width(400)
        .height(256)
        .fit("crop")
        .format("webp")
        .url()
    : undefined,
});

export const mapCertificate = (
  certificate: SanityCertificateDocument,
): Certificate => ({
  iconLabel: certificate.iconLabel,
  title: certificate.title,
  issuer: certificate.issuer,
  dateLabel: `Issued ${formatMonthYear(certificate.issuedAt)}`,
  credentialUrl: certificate.credentialUrl,
  imageUrl: certificate.image
    ? urlFor(certificate.image)
        .width(88)
        .height(88)
        .fit("crop")
        .format("webp")
        .url()
    : undefined,
});

export const getAboutPhotoUrl = (
  about: SanityAboutDocument,
): string | undefined =>
  about.photo
    ? urlFor(about.photo).width(480).height(480).format("webp").url()
    : undefined;

export const getAboutHeroPhotoUrl = (
  about: SanityAboutDocument,
): string | undefined =>
  about.photo
    ? urlFor(about.photo).width(420).height(420).format("webp").url()
    : undefined;

export const getAboutOgImageUrl = (
  about: SanityAboutDocument,
): string | undefined => buildOgImageUrl(about.photo);
