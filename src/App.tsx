import { Container } from "@mui/material";
import { SetStateAction, useState } from "react";
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

  const handleJsonChange = (ev: {
    target: { value: SetStateAction<string> };
  }) => {
    setJsonData(ev.target.value);
  };

  return (
    <Container
      sx={{
        mt: 3,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 3,
      }}
    >
      <Generator jsonData={jsonData} handleJsonChange={handleJsonChange} />
      <Form fields={JSON.parse(jsonData).fields} />
    </Container>
  );
};

export default App;
