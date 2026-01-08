import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Form from "./Form";
import { FormData, Option } from "../../../types";

const FORM_DATA_MOCK: FormData = {
  fields: [
    { type: "text", label: "Name", placeholder: "Enter your name" },
    { type: "checkbox", label: "Agree to Terms" },
    {
      type: "radio",
      label: "Choose One",
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ],
    },
  ],
};

describe("Form Component", () => {
  it("should render fields correctly", () => {
    render(<Form fields={FORM_DATA_MOCK.fields} />);

    expect(screen.getByLabelText("Name")).toHaveAttribute(
      "placeholder",
      "Enter your name"
    );

    expect(screen.getByLabelText("Agree to Terms")).toBeInTheDocument();

    FORM_DATA_MOCK.fields[2].options?.forEach((option: Option) => {
      const radioField = screen.getByLabelText(option.label);
      expect(radioField).toBeInTheDocument();
    });
  });
});
