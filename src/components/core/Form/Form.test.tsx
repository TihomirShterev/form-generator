import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import Form from "./Form";
import { FormData, Option } from "../../../types";

const FORM_DATA_MOCK: FormData = {
  fields: [
    {
      type: "text",
      name: "name",
      label: "Name",
      placeholder: "Enter your name",
      validation: {
        required: "Name is required",
        custom: "alphabetic",
      },
    },
    {
      name: "service",
      type: "dropdown",
      label: "Service Type",
      options: [
        { label: "BUSINESS", value: "business" },
        { label: "INDIVIDUAL", value: "individual" },
      ],
      validation: { required: "Select an option" },
    },
    { type: "checkbox", name: "terms", label: "Agree to Terms" },
    {
      type: "radio",
      name: "choice",
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

  it("should validate required fields correctly", async () => {
    render(<Form fields={FORM_DATA_MOCK.fields} />);
    fireEvent.click(screen.getByText("Submit"));
    expect(await screen.findByText("Name is required")).toBeInTheDocument();
  });

  it("should validate custom alphabetic fields correctly", async () => {
    render(<Form fields={FORM_DATA_MOCK.fields} />);

    fireEvent.input(screen.getByLabelText("Name"), {
      target: { value: "123" },
    });

    fireEvent.click(screen.getByText("Submit"));

    expect(
      await screen.findByText("Please enter letters only")
    ).toBeInTheDocument();
  });

  it("should handle form submission with valid data", async () => {
    render(<Form fields={FORM_DATA_MOCK.fields} />);
    fireEvent.mouseDown(screen.getByLabelText("Service Type"));
    const options = await screen.findAllByRole("option");
    fireEvent.click(options[0]); // Select "BUSINESS"
    fireEvent.click(screen.getByLabelText("Agree to Terms"));

    fireEvent.input(screen.getByLabelText("Name"), {
      target: { value: "JohnDoe" },
    });

    await act(async () => {
      fireEvent.click(screen.getByText("Submit"));
    });

    expect(
      await screen.queryByText("Name is required")
    ).not.toBeInTheDocument();

    expect(screen.queryByText("Select an option")).not.toBeInTheDocument();

    expect(
      screen.queryByText("You must accept the terms")
    ).not.toBeInTheDocument();
  });
});
