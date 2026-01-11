import { Validation } from "../types";
import { VALIDATION_DATA } from "./constants";

export default function customize(rules?: Validation) {
  if (rules?.custom) {
    const customData = VALIDATION_DATA[rules.custom];

    rules.validate = (value: string) =>
      customData.pattern.test(value) || customData.message;
  }

  return rules;
}
