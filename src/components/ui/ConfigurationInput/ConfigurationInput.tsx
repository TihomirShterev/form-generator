import { TextField } from "@mui/material";
import ContainerBox from "../../core/ContainerBox/ContainerBox";
import { ConfigurationInputProps } from "./ConfigurationInput.types";

const ConfigurationInput = ({
  jsonData,
  handleJsonChange,
  error,
}: ConfigurationInputProps) => (
  <ContainerBox title="JSON Structure:">
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
  </ContainerBox>
);

export default ConfigurationInput;
