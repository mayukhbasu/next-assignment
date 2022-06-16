import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Search from "../Search";


describe("Checking the screen components", () => {
  it("should show the header Welcome To Harmony", () => {
    render(<Search searchSongs={() => {}}/>)
    expect(
      screen.getByText(/Welcome to Harmony/)
    ).toBeInTheDocument();
  });
  it('should have search box in the header section', () => {
    render(<Search searchSongs={() => {}}/>);
    const searchEl = screen.getByTestId("searchSong");
    expect(searchEl).toBeInTheDocument();
    expect(searchEl).toHaveAttribute("type", "text");
  });
  it('should have icon for searching in the header section', () => {
    render(<Search searchSongs={() => {}}/>);    
    const searchEl = screen.getByTestId("searchSong");
    userEvent.type(searchEl, "pink");
    const searchIcon = screen.getByTestId("findSong");
    expect(searchIcon).toBeInTheDocument();
    expect(screen.getByTestId("searchSong")).toHaveValue("pink");
  });
  
});