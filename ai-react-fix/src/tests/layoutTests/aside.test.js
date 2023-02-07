import Aside from "layout/Aside";
import store from "redux/store";
import { render, screen } from "@testing-library/react";
import { renderWithProviders } from "tests/TestUtils";

describe("Aside Component", () => {
    it("renders without crashing", () => {
        renderWithProviders(<Aside />, store);
    });
});