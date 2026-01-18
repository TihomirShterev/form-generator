import { Container } from "@mui/material";
import Generator from "./components/ui/Generator/Generator";
import ConfigurationInput from "./components/ui/ConfigurationInput/ConfigurationInput";
import { useConfiguration } from "./hooks/useConfiguration";

const App = () => {
  const { handleJsonChange, jsonData, error, fields } = useConfiguration();

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
        handleJsonChange={handleJsonChange}
        jsonData={jsonData}
        error={error}
      />
      <Generator fields={fields} />
    </Container>
  );
};

export default App;
