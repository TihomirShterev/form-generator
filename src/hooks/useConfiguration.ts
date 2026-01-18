import { useState } from "react";
import {
  AUTO_SAVE_JSON_DATA,
  INITIAL_CONFIGURATION_INPUT_DATA,
  JSON_DATA_KEY,
} from "../App.data";

export const useConfiguration = () => {
  const [jsonData, setJsonData] = useState(
    AUTO_SAVE_JSON_DATA ||
      JSON.stringify(INITIAL_CONFIGURATION_INPUT_DATA, null, 2)
  );

  const [parsedData, setParsedData] = useState(
    AUTO_SAVE_JSON_DATA
      ? JSON.parse(AUTO_SAVE_JSON_DATA)
      : INITIAL_CONFIGURATION_INPUT_DATA
  );

  const [error, setError] = useState("");

  const handleJsonChange = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    setJsonData(value);
    localStorage.setItem(JSON_DATA_KEY, value);

    try {
      const parsed = JSON.parse(value);
      setParsedData(parsed);
      setError("");
    } catch (err) {
      setError("Please enter a valid JSON structure");
    }
  };

  return {
    jsonData,
    fields: parsedData.fields,
    error,
    handleJsonChange,
  };
};
