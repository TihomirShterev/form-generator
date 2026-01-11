import { Container } from "@mui/material";
import { useState } from "react";
import Form from "./components/core/Form/Form";
import Generator from "./components/core/Generator/Generator";

const App = () => {
  const [jsonData, setJsonData] = useState(
    JSON.stringify(
      {
        fields: [],
      },
      null,
      2
    )
  );

  const [parsedData, setParsedData] = useState({
    fields: [],
  });

  const [error, setError] = useState("");

  const handleJsonChange = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    setJsonData(value);

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
        mt: 3,
        mb: 3,
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
