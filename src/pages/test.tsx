import { PageProps } from "gatsby";
import { FC } from "react";
import SEO from "@/components/seo";

const NotFoundPage: FC<PageProps> = ({ location: { pathname } }) => (
  <>
    <SEO
      title="404 | Page Not Found"
      description="404 | Page Not Found"
      pathname={pathname}
    />
    <h1>Hello world</h1>
  </>
);

export default NotFoundPage;
