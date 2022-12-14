import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import App from "./App";

test("renders home page", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const header = screen.getByText(/drawing/i);
  expect(header).toBeInTheDocument();
});
