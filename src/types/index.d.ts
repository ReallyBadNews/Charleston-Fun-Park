import { FluidObject } from "gatsby-image";

export type CommonProps = {
  dataTestId?: string;
  className?: string;
};

export interface MediaCommonProps extends CommonProps {
  alt: string;
}

export interface FeaturedAttractionProps {
  data: {
    node: {
      description: {
        description: string;
      };
      id: string;
      isVideo: boolean;
      title: string;
      videoPoster: {
        fluid: FluidObject;
      };
    };
  };
}
