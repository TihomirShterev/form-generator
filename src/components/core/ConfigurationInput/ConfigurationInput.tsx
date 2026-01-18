import { TextField } from "@mui/material";
import HeroContainer from "../../shared/HeroContainer";
import { ConfigurationInputProps } from "../../../types/types";

const ConfigurationInput = ({
  jsonData,
  handleJsonChange,
  error,
}: ConfigurationInputProps) => (
  <HeroContainer title="JSON Structure:">
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
  </HeroContainer>
);

export default ConfigurationInput;
