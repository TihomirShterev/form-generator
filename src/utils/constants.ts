export const VALIDATION_DATA = {
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

export const MOCK_AUTO_FILL_DATA: {
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
