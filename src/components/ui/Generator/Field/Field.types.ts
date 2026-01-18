import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
import { Validation } from "../../../../types/types";

export interface Option {
  label: string;
  value: string | number;
}

export interface Field {
  type: "text" | "textarea" | "dropdown" | "checkbox" | "radio" | "group";
  name: string;
  label: string;
  placeholder?: string;
  options?: Option[];
  validation?: Validation;
  isVisible?: { name: string; value: string };
  fields?: Field[];
}

export interface FieldProps {
  field: Field;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}
