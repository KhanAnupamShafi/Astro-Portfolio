import type { SanityImageSource } from "@sanity/image-url";
import { urlFor } from "@/lib/sanity";

export type OgType = "website" | "article";

export const buildOgImageUrl = (
  source: SanityImageSource | undefined,
): string | undefined => {
  if (!source) {
    return undefined;
  }

  return urlFor(source).width(1200).height(630).fit("crop").auto("format").url();
};

export const buildCanonicalUrl = (site: URL | string | undefined, pathname: string): string => {
  if (!site) {
    return pathname;
  }

  return new URL(pathname, site).href;
};
