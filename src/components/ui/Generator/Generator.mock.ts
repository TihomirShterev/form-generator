import { IField } from "@/types/types";

export const MOCK_FIELDS: IField[] = [
  {
    type: "text",
    name: "name",
    label: "Name",
    placeholder: "Enter your name",
    validation: { required: "Name is required", custom: "alphabetic" },
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
        validation: { required: "IBAN is required", custom: "alphanumeric" },
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
            validation: { required: "Email is required", custom: "email" },
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
            name: "zipCode",
            label: "Zip Code (Try 10001 for New York)",
            placeholder: "Enter Zip Code",
            validation: {
              custom: "numeric",
              maxLength: { value: 5, message: "Zip Code must be 5 digits" },
              minLength: { value: 5, message: "Zip Code must be 5 digits" },
            },
          },
          {
            type: "text",
            name: "city",
            label: "City (Auto-filled)",
            validation: { required: "City is required" },
          },
          {
            type: "text",
            name: "state",
            label: "State (Auto-filled)",
            validation: { required: "State is required" },
          },
          { type: "text", name: "addressLineOne", label: "Address Line 1" },
          { type: "text", name: "addressLineTwo", label: "Address Line 2" },
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
