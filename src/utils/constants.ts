import { IField } from "../types";

export const VALIDATION_DATA = {
  alphabetic: {
    pattern: /^[A-Za-z]+$/,
    message: "Please enter letters only",
  },
  numeric: {
    pattern: /^[0-9]+$/,
    message: "Please enter numbers only",
  },
  alphanumeric: {
    pattern: /^[a-zA-Z0-9]+$/,
    message: "Please enter letters and/or numbers",
  },
  email: {
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Please enter a valid email address",
  },
  password: {
    pattern:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    message:
      "Password must be at least 8 characters, include one uppercase letter, one lowercase letter, one number, and one special character",
  },
};

export const FIELDS_MOCK: IField[] = [
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
            name: "zipCode",
            label: "Zip Code",
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

export const AUTO_FILL_DATA_MOCK: {
  [key: string]: {
    city: string;
    state: string;
  };
} = {
  "10001": {
    city: "New York",
    state: "New York",
  },
  "90010": {
    city: "Los Angeles",
    state: "California",
  },
  "60629": {
    city: "Chicago",
    state: "Illinois",
  },
  "77084": {
    city: "Houston",
    state: "Texas",
  },
  "19102": {
    city: "Philadelphia",
    state: "Pennsylvania",
  },
  "85003": {
    city: "Phoenix",
    state: "Arizona",
  },
  "78207": {
    city: "San Antonio",
    state: "Texas",
  },
  "92105": {
    city: "San Diego",
    state: "California",
  },
  "75217": {
    city: "Dallas",
    state: "Texas",
  },
  "95123": {
    city: "San Jose",
    state: "California",
  },
};

export const INITIAL_GENERATOR_DATA = {
  fields: [],
};

export const JSON_DATA_KEY = "auto_save_json_data";
export const AUTO_SAVE_JSON_DATA = localStorage.getItem(JSON_DATA_KEY);
export const FORM_DATA_KEY = "auto_save_form_data";
export const AUTO_SAVE_FORM_DATA = localStorage.getItem(FORM_DATA_KEY);
