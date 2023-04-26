import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "@/components/Footer";

describe("Footer", () => {
  //Footer should be sticky
  it("Should be sticky", () => {
    render(<Footer />);
    const theFooter = screen.getByRole("contentinfo");
    expect(theFooter).toHaveClass("fixed");
  });
  //
  //
  //Footer should have three specific links
  it("Should contain three specific links to Home, Users, and Prim-Ed", () => {
    render(<Footer />);
    const homeLink = screen.getAllByRole("link"); //creates an array of the links present
    //'Home' link
    expect(homeLink[0]).toHaveTextContent("Home");
    expect(homeLink[0]).toHaveAttribute("href", "/");
    //'Users' link
    expect(homeLink[1]).toHaveTextContent("Users");
    expect(homeLink[1]).toHaveAttribute("href", "/users");
    //'Prim-Ed' link
    expect(homeLink[2]).toHaveTextContent("Prim-Ed");
    expect(homeLink[2]).toHaveAttribute("href", "https://www.prim-ed.ie/");
  });
});
