import { Validation } from "@/types/types";

const VALIDATION_DATA = {
  alphabetic: {
    pattern: /^[A-Za-z\s]+$/,
    message: "Please enter letters and space only",
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

export const customize = (rules?: Validation) => {
  if (rules?.custom) {
    const { pattern, message } = VALIDATION_DATA[rules.custom];
    rules.validate = (value: string) => pattern.test(value) || message;
  }

  return rules;
};
