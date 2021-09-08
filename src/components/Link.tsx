/** @jsxImportSource theme-ui */

import { Link as GatsbyLink } from "gatsby";
import { Box, Link as ThemeUILink, SxProp } from "theme-ui";

export type AnchorProps = Omit<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >,
  "href" | "ref"
>;

interface LinkProps extends SxProp, AnchorProps {
  to: string;
  onClick?: (event?: React.MouseEvent<HTMLAnchorElement>) => void;
}

// Provided a url, return a boolean if it is an external link
const isExternal = (url: string) => {
  const match = /^https?:\/\//.exec(url);
  return !!match && match.index === 0;
};

export const Link: React.FC<LinkProps> = ({ children, to, sx, ...props }) => {
  if (isExternal(to)) {
    return (
      <ThemeUILink {...props} href={to} sx={{ textDecoration: "none", ...sx }}>
        {children}
      </ThemeUILink>
    );
  }

  return (
    <GatsbyLink sx={{ textDecoration: "none", ...sx }} to={to} {...props}>
      <Box as="span">{children}</Box>
    </GatsbyLink>
  );
};
