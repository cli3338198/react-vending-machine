import { MemoryRouter } from "react-router-dom";
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import VendingMachine from "./VendingMachine";
import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";

it("renders the Main Page", function () {
  const { debug, container, getByText } = render(
    <MemoryRouter>
      <VendingMachine />
    </MemoryRouter>
  );

  const link = container.querySelectorAll("a");
  expect(link).toHaveLength(3);
});

it("renders correct snack", function () {
  const { debug, container, getByText } = render(
    <MemoryRouter initialEntries={["/chips"]}>
      <VendingMachine />
    </MemoryRouter>
  );

  //const txt = getByText("/Your snack was chips/i");
  const image = container.querySelector("img");
  debug(image);
  // expect(`Your snack was
  // chips`).toBeInTheDocument();
  //   expect(image).toContainHTML('<img src="/chips.png" alt="chips" />');
  expect(<img src="/chips.png" alt="chips" />).toBeInTheDocument();
});
