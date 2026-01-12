import "@testing-library/jest-dom";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import Form from "./Form";
import { IField, Option } from "../../../types";

const FIELDS_MOCK: IField[] = [
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
    name: "entity",
    type: "dropdown",
    label: "Entity",
    options: [
      { label: "BUSINESS", value: "business" },
      { label: "INDIVIDUAL", value: "individual" },
    ],
    validation: { required: "Select an option" },
  },
  {
    type: "group",
    name: "companyData",
    label: "Company Data",
    isVisible: { name: "entity", value: "business" },
    fields: [
      {
        type: "text",
        name: "companyName",
        label: "Company Name",
        placeholder: "Enter company name",
        validation: { required: "Company Name is required" },
      },
      {
        type: "text",
        name: "uniqueIdentificationCode",
        label: "Unique Identification Code",
        placeholder: "Enter Unique Identification Code",
        validation: {
          required: "Unique Identification Code is required",
          custom: "numeric",
        },
      },
      {
        type: "text",
        name: "iban",
        label: "IBAN",
        placeholder: "Enter IBAN",
        validation: {
          required: "IBAN is required",
          custom: "alphanumeric",
        },
      },
      {
        type: "text",
        name: "addressOfHeadquarters",
        label: "Address of Headquarters",
      },
    ],
  },
  {
    type: "group",
    name: "individualData",
    label: "Individual Data",
    isVisible: { name: "entity", value: "individual" },
    fields: [
      {
        type: "group",
        name: "personalData",
        label: "Personal Data",
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
            type: "text",
            name: "email",
            label: "Email",
            placeholder: "Enter your email",
            validation: {
              required: "Email is required",
              custom: "email",
            },
          },
        ],
      },
      {
        type: "group",
        name: "deliveryData",
        label: "Delivery Data",
        fields: [
          {
            type: "text",
            name: "city",
            label: "City",
          },
          {
            type: "text",
            name: "addressLineOne",
            label: "Address Line 1",
          },
          {
            type: "text",
            name: "addressLineTwo",
            label: "Address Line 2",
          },
        ],
      },
    ],
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
];

describe("Form Component", () => {
  it("should render fields correctly", () => {
    render(<Form fields={FIELDS_MOCK} />);

    expect(screen.getByLabelText("Name")).toHaveAttribute(
      "placeholder",
      "Enter your name"
    );

    expect(screen.getByLabelText("Agree to Terms")).toBeInTheDocument();

    FIELDS_MOCK[2].options?.forEach((option: Option) => {
      const radioField = screen.getByLabelText(option.label);
      expect(radioField).toBeInTheDocument();
    });
  });

  it("should validate required fields correctly", async () => {
    render(<Form fields={FIELDS_MOCK} />);
    fireEvent.click(screen.getByText("Submit"));
    expect(await screen.findByText("Name is required")).toBeInTheDocument();
  });

  it("should validate custom alphabetic fields correctly", async () => {
    render(<Form fields={FIELDS_MOCK} />);

    fireEvent.input(screen.getByLabelText("Name"), {
      target: { value: "123" },
    });

    fireEvent.click(screen.getByText("Submit"));

    expect(
      await screen.findByText("Please enter letters only")
    ).toBeInTheDocument();
  });

  it("should render dynamic field groups correctly", async () => {
    render(<Form fields={FIELDS_MOCK} />);
    expect(screen.queryByLabelText(/Company Data/i)).not.toBeInTheDocument();
    const dropdownTrigger = screen.getByLabelText(/Entity/i);
    fireEvent.mouseDown(dropdownTrigger);
    const option = await screen.findByText("BUSINESS");
    fireEvent.click(option);

    await waitFor(() => {
      expect(screen.getByText(/Company Data/i)).toBeInTheDocument();
    });
  });

  it("should handle form submission with valid data", async () => {
    render(<Form fields={FIELDS_MOCK} />);
    fireEvent.mouseDown(screen.getByLabelText("Entity"));
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
