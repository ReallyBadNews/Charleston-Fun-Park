import { PageProps } from "gatsby";
import React, { FC } from "react";
import StarDivider from "@/components/Dividers/StarDivider";
import SEO from "@/components/seo";

const NotFoundPage: FC<PageProps> = ({ location: { pathname } }) => (
  <>
    <SEO
      title="404 | Page Not Found"
      description="404 | Page Not Found"
      pathname={pathname}
    />
    <StarDivider title="Page Not Found" />
  </>
);

export default NotFoundPage;
