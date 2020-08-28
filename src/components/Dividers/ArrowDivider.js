/** @jsx jsx */
import PropTypes from "prop-types";
import { Container, Divider, Text, jsx } from "theme-ui";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import { Inline } from "raam";
import Arrow from "../Images/Arrow";
import BrickBg from "../Images/BrickBg";
import StyledLink from "../Link.styled";

const ArrowDivider = ({ id }) => {
  const breakpoints = useBreakpoint();

  return (
    <BrickBg id={id}>
      <Divider sx={{ position: `absolute`, top: `0` }} variant="divider.glow" />
      <Container>
        <Inline
          alignItems="center"
          gap={[`2`, null, `3`, null, `4`]}
          justifyContent="center"
          py="3"
        >
          <Arrow
            sx={{
              height: `auto`,
              transform: `rotateZ(180deg)`,
              width: [`72px`, null, `24`, null, `32`],
            }}
          />
          {breakpoints.tablet ? (
            <StyledLink scrollTo="birthdays">
              <Text variant="display">The Party Starts Here</Text>
            </StyledLink>
          ) : (
            <StyledLink scrollTo="birthdays">
              <Text variant="display">
                The Party
                <br />
                Starts Here
              </Text>
            </StyledLink>
          )}
          <Arrow
            sx={{
              height: `auto`,
              width: [`72px`, null, `24`, null, `32`],
            }}
          />
        </Inline>
      </Container>
      <Divider
        sx={{ position: `absolute`, bottom: `0` }}
        variant="divider.glow"
      />
    </BrickBg>
  );
};

ArrowDivider.propTypes = {
  id: PropTypes.string,
};

ArrowDivider.defaultProps = {
  id: null,
};

export default ArrowDivider;
