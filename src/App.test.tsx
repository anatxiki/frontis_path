import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("muestra el logo de biko", () => {
  render(<App />);
  const logoBiko = screen.getByRole("img", { name: "Logo de Biko" });
  expect(logoBiko).toBeInTheDocument();
});
