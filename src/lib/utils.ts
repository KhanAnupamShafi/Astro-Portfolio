import { toHTML } from "@portabletext/to-html";
import type { PortableTextBlock } from "@portabletext/types";

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
      marks: {
        link: ({ children, value }) => {
          const href = typeof value?.href === "string" ? value.href : "#";

          return `<a href="${href}" target="_blank" rel="noopener noreferrer">${children}</a>`;
        },
      },
    },
  });
};
