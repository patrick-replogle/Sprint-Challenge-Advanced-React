import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";
import NavBar from "./components/NavBar";
import Players from "./components/Players";
import PlayersCard from "./components/PlayersCard";
import useDarkMode from "./hooks/useDarkMode";
import useLocalStorage from "./hooks/useLocalStorage";
import expectExport from "expect";

afterEach(rtl.cleanup);

test("The App renders without crashing", () => {
  rtl.render(<App />);
});

test("NavBar renders without crashing", () => {
  rtl.render(<NavBar />);
});

test("Renders Womens World Cup text", () => {
  const wrapper = rtl.render(<App />);
  expect(wrapper.getByText(/women's world cup/i));
});
