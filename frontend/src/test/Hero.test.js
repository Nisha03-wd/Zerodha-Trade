import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {
  test("renders Hero component with correct content", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
  });

  test("renders signup button correctly", () => {
    render(<Hero />);
    const signupButton = screen.getByRole("button", { name: "Signup Now" });
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass("btn btn-primary fs-5 mb-5");
  });
});