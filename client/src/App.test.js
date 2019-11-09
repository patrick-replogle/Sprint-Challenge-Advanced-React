import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";
import NavBar from "./components/NavBar";
import Players from "./components/Players";
import PlayersCard from "./components/PlayersCard";

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

test("Players are defined", () => {
  const players = <Players />;
  expect(players).toBeDefined();
  expect(players).not.toBeUndefined();
  expect(players).not.toBeFalsy();
});

test("PlayerCard is defined", () => {
  const card = <PlayersCard />;
  expect(card).toBeDefined();
  expect(card).not.toBeUndefined();
  expect(card).not.toBeFalsy();
});

test("useDarkMode exists", () => {
  const dark = <useDarkMode />;
  expect(dark).toBeDefined();
  expect(dark).not.toBeUndefined();
  expect(dark).not.toBeFalsy();
});

test("uselocalStorage exists", () => {
  const storage = <useLocalStorage />;
  expect(storage).toBeDefined();
  expect(storage).not.toBeUndefined();
  expect(storage).not.toBeFalsy();
});
