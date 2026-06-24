export const ABOUT_QUERY = `
  *[_id == "about"][0] {
    name,
    title,
    bio,
    initials,
    location,
    timezone,
    email,
    githubUrl,
    linkedinUrl,
    twitterUrl,
    availability,
    skillCategories[] {
      _key,
      title,
      skills
    },
    photo
  }
`;

export const ALL_EXPERIENCE_QUERY = `
  *[_type == "experience"] | order(startDate desc) {
    _id,
    role,
    company,
    companyUrl,
    startDate,
    endDate,
    current,
    description,
    highlights,
    techStack
  }
`;

export const FEATURED_PROJECTS_QUERY = `
  *[_type == "project" && featured == true] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    techStack,
    coverImage,
    liveUrl,
    githubUrl
  }
`;

export const ALL_PROJECTS_QUERY = `
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    techStack,
    coverImage,
    liveUrl,
    githubUrl
  }
`;

export const PROJECT_SLUGS_QUERY = `
  *[_type == "project" && defined(slug.current)] {
    "slug": slug.current
  }
`;

export const PROJECT_BY_SLUG_QUERY = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    longDescription,
    techStack,
    coverImage,
    liveUrl,
    githubUrl
  }
`;

export const ALL_POSTS_QUERY = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    thumbLabel,
    excerpt,
    tags
  }
`;

export const POST_SLUGS_QUERY = `
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current
  }
`;

export const POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    thumbLabel,
    excerpt,
    tags,
    body
  }
`;

export const ALL_CERTIFICATES_QUERY = `
  *[_type == "certificate"] | order(issuedAt desc) {
    _id,
    title,
    issuer,
    issuedAt,
    iconLabel,
    credentialUrl,
    image
  }
`;
