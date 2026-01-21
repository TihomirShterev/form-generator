import { useState } from "react";

const INITIAL_CONFIGURATION_INPUT_DATA = { fields: [] };
const JSON_DATA_KEY = "auto_save_json_data";
const autoSaveJsonData = localStorage.getItem(JSON_DATA_KEY);

export const useConfiguration = () => {
  const [jsonData, setJsonData] = useState(
    autoSaveJsonData ||
      JSON.stringify(INITIAL_CONFIGURATION_INPUT_DATA, null, 2)
  );

  const [parsedData, setParsedData] = useState(
    autoSaveJsonData
      ? JSON.parse(autoSaveJsonData)
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

  return { jsonData, fields: parsedData.fields, error, handleJsonChange };
};
