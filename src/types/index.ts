import { ReactNode } from "react";

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

export interface IField {
  type: "text" | "textarea" | "dropdown" | "checkbox" | "radio";
  label: string;
  placeholder?: string;
  options?: Option[];
}

export interface FormData {
  fields: IField[];
}
