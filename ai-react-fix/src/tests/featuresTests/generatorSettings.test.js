import GeneratorSettings from "features/GeneratorSettings";
import store from "redux/store";
import { render, screen } from "@testing-library/react";
import { renderWithProviders } from "tests/TestUtils";

describe("Generator Settings Component", () => {
    it("renders without crashing", () => {
        renderWithProviders(<GeneratorSettings />, store);
    });
});