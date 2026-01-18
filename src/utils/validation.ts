import { Validation } from "../types/types";
import { VALIDATION_DATA } from "./constants";

export const customize = (rules?: Validation) => {
  if (rules?.custom) {
    const { pattern, message } = VALIDATION_DATA[rules.custom];
    rules.validate = (value: string) => pattern.test(value) || message;
  }

  return rules;
};
