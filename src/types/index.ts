import { ReactNode } from "react";
import { UseFormRegister, FieldErrors, FieldValues } from "react-hook-form";

export interface HeroContainerProps {
  title: string;
  children: ReactNode;
}

export interface GeneratorProps {
  jsonData: string;
  handleJsonChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

export interface Option {
  label: string;
  value: string | number;
}

interface LengthValidation {
  value: number;
  message: string;
}

export interface Validation {
  required?: string;
  minLength?: LengthValidation;
  maxLength?: LengthValidation;
  pattern?: { value: RegExp; message: string };
  validate?: (value: string) => boolean | string;
  custom?: "alphabetic" | "numeric" | "alphanumeric" | "email" | "password";
}

export interface IField {
  type: "text" | "textarea" | "dropdown" | "checkbox" | "radio";
  name: string;
  label: string;
  placeholder?: string;
  options?: Option[];
  validation?: Validation;
}

export interface FieldProps {
  field: IField;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

export interface FormData {
  fields: IField[];
}
