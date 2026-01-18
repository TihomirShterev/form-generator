import { TextField } from "@mui/material";
import ContainerCard from "../../shared/ContainerCard";
import { ConfigurationInputProps } from "../../../types/types";

const ConfigurationInput = ({
  jsonData,
  handleJsonChange,
  error,
}: ConfigurationInputProps) => (
  <ContainerCard title="JSON Structure:">
    <TextField
      fullWidth
      multiline
      minRows={5}
      maxRows={15}
      onChange={handleJsonChange}
      value={jsonData}
      error={!!error}
      helperText={error}
      sx={{ bgcolor: "#fff" }}
    />
  </ContainerCard>
);

export default ConfigurationInput;
