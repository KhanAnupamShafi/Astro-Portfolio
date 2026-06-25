import { toHTML } from "@portabletext/to-html";
import type { PortableTextBlock } from "@portabletext/types";
import { urlFor } from "@/lib/sanity";
import type { SanityImage } from "@/types";

const escapeHtml = (text: string): string =>
  text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

export const formatDate = (isoDate: string): string => {
  const [year, month, day] = isoDate.split("-").map(Number);

  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const formatMonthYear = (isoDate: string): string => {
  const [year, month] = isoDate.split("-").map(Number);

  return new Date(year, month - 1, 1).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
};

export const formatDateRange = (
  startDate: string,
  endDate: string | null,
  isCurrent: boolean,
): string => {
  const startYear = startDate.split("-")[0];

  if (isCurrent) {
    return `${startYear} — present`;
  }

  if (endDate) {
    return `${startYear} — ${endDate.split("-")[0]}`;
  }

  return startYear;
};

export const portableTextToHtml = (
  blocks: PortableTextBlock[] | null | undefined,
): string => {
  if (!blocks || blocks.length === 0) {
    return "";
  }

  return toHTML(blocks, {
    components: {
      types: {
        image: ({ value }) => {
          if (!value?.asset) {
            return "";
          }

          const imageUrl = urlFor(value as SanityImage).width(1200).auto("format").url();
          const alt = typeof value.alt === "string" ? escapeHtml(value.alt) : "";
          const caption =
            typeof value.caption === "string" ? escapeHtml(value.caption) : "";
          const imageMarkup = `<img src="${imageUrl}" alt="${alt}" loading="lazy" decoding="async" class="prose-image" />`;

          if (caption) {
            return `<figure class="prose-figure">${imageMarkup}<figcaption class="prose-caption">${caption}</figcaption></figure>`;
          }

          return `<figure class="prose-figure">${imageMarkup}</figure>`;
        },
      },
      marks: {
        link: ({ children, value }) => {
          const href = typeof value?.href === "string" ? value.href : "#";

          return `<a href="${href}" target="_blank" rel="noopener noreferrer">${children}</a>`;
        },
      },
    },
  });
};
