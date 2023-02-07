import FlexColumn from "layout/FlexColumn";
import store from "redux/store";
import { render, screen } from "@testing-library/react";
import { renderWithProviders } from "tests/TestUtils";

describe("Flex Column Component", () => {
    it("renders without crashing", () => {
        renderWithProviders(<FlexColumn />, store);
    });
});