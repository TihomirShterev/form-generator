import { Container } from "@mui/material";
import { useState } from "react";
import Form from "./components/core/Form/Form";
import Generator from "./components/core/Generator/Generator";
import {
  AUTO_SAVE_JSON_DATA,
  INITIAL_GENERATOR_DATA,
  JSON_DATA_KEY,
} from "./utils/constants";

const App = () => {
  const [jsonData, setJsonData] = useState(
    AUTO_SAVE_JSON_DATA || JSON.stringify(INITIAL_GENERATOR_DATA, null, 2)
  );

  const [parsedData, setParsedData] = useState(
    AUTO_SAVE_JSON_DATA
      ? JSON.parse(AUTO_SAVE_JSON_DATA)
      : INITIAL_GENERATOR_DATA
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
      <Generator
        jsonData={jsonData}
        handleJsonChange={handleJsonChange}
        error={error}
      />
      <Form fields={parsedData.fields} />
    </Container>
  );
};

export default App;
