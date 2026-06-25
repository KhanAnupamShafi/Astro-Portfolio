import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

const getSanityProjectId = (): string => {
  const projectId =
    import.meta.env.SANITY_PROJECT_ID ?? process.env.SANITY_PROJECT_ID;

  if (!projectId) {
    throw new Error("SANITY_PROJECT_ID is not set");
  }

  return projectId;
};

const getSanityDataset = (): string =>
  import.meta.env.SANITY_DATASET ?? process.env.SANITY_DATASET ?? "production";

export const sanityClient = createClient({
  projectId: getSanityProjectId(),
  dataset: getSanityDataset(),
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = createImageUrlBuilder(sanityClient);

export const urlFor = (source: SanityImageSource) => builder.image(source);
