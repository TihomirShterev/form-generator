import { Container } from "@mui/material";
import { useState } from "react";
import Generator from "./components/ui/Generator/Generator";
import ConfigurationInput from "./components/ui/ConfigurationInput/ConfigurationInput";
import {
  AUTO_SAVE_JSON_DATA,
  INITIAL_CONFIGURATION_INPUT_DATA,
  JSON_DATA_KEY,
} from "./App.data";

const App = () => {
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
      setParsedData(JSON.parse(value));
      setError("");
    } catch (err) {
      setError("Please enter a valid JSON structure");
    }
  };

  return (
    <Container
      sx={{
        mt: 2,
        mb: 2,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 3,
      }}
    >
      <ConfigurationInput
        jsonData={jsonData}
        handleJsonChange={handleJsonChange}
        error={error}
      />
      <Generator fields={parsedData.fields} />
    </Container>
  );
};

export default App;
