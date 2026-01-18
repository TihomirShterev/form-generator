import {
  UseFormSetValue,
  UseFormSetError,
  UseFormClearErrors,
  UseFormResetField,
} from "react-hook-form";

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

type ZipCode = string;

export interface AddressData {
  zipCode: ZipCode;
  city: string;
  state: string;
}

export interface FormValues {
  [key: string]: string | boolean | null;
}

export interface AutoFill {
  zipCode: ZipCode;
  setValue: UseFormSetValue<FormValues>;
  setError: UseFormSetError<FormValues>;
  clearErrors: UseFormClearErrors<FormValues>;
  resetField: UseFormResetField<FormValues>;
}
