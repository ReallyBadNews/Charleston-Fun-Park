import React from "react";
import { render, screen } from "@testing-library/react";
import StyledLink from "../Link.styled";

describe("StyledLink", () => {
  it("renders the text", () => {
    const testMessage = "Hello world";
    render(<StyledLink>{testMessage}</StyledLink>);
    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });

  it("has an internal link", () => {
    const testMessage = "Hello world";
    const linkLocation = "/hello-world/";
    render(<StyledLink to={linkLocation}>{testMessage}</StyledLink>);
    expect(screen.getByText(testMessage)).toHaveAttribute("href", linkLocation);
  });

  it("has a scrollLink", () => {
    const testMessage = "Hello world";
    const linkLocation = "goHere";
    render(<StyledLink scrollTo={linkLocation}>{testMessage}</StyledLink>);
    expect(screen.getByText(testMessage)).not.toHaveAttribute("href");
  });

  it("has a, external link", () => {
    const testMessage = "Hello world";
    const linkLocation = "https://google.com/";
    render(<StyledLink href={linkLocation}>{testMessage}</StyledLink>);
    expect(screen.getByText(testMessage)).toHaveAttribute("href", linkLocation);
    expect(screen.getByText(testMessage)).toHaveAttribute("rel", "noopener");
    expect(screen.getByText(testMessage)).toHaveAttribute("target", "_blank");
  });
});
