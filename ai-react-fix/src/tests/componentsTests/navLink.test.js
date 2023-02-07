import NavLink from "components/NavLink";
import store from "redux/store";
import { render, screen } from "@testing-library/react";
import { renderWithProviders } from "tests/TestUtils";

describe("Nav Link Component", () => {
    it("renders without crashing", () => {
        renderWithProviders(<NavLink />, store);
    });
});