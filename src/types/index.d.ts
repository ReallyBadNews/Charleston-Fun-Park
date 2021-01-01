import { FluidObject } from "gatsby-image";

export type CommonProps = {
  dataTestId?: string;
  className?: string;
};

export interface MediaCommonProps extends CommonProps {
  alt: string;
}

interface ImageProps {
  fluid: FluidObject;
  file: {
    contentType: string;
    url: string;
  };
}

interface VideoProps {
  fluid: never;
  file: {
    contentType: string;
    url: string;
  };
}

interface MediaMeta {
  title: string;
  description: string;
}

export type MediaObject = (ImageProps | VideoProps) & MediaMeta;

export interface ChildFluidObject {
  childImageSharp: {
    fluid: FluidObject;
  };
}

export interface Attraction {
  id: string;
  heroImage: MediaObject;
  videoPoster: MediaObject;
  description: {
    description: string;
  };
  title: string;
  order: number;
}

export interface FeaturedAttractionProps {
  data: {
    node: Attraction;
  };
}
