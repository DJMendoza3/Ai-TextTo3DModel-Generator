import Slider from "components/Slider";
import store from "redux/store";
import { render, screen } from "@testing-library/react";
import { renderWithProviders } from "tests/TestUtils";

describe("Slider Component", () => {
    it("renders without crashing", () => {
        renderWithProviders(<Slider />, store);
    });
});