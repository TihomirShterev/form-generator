export interface ConfigurationInputProps {
  jsonData: string;
  handleJsonChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
}
