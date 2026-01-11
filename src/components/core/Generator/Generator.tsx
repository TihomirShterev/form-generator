import { TextField } from "@mui/material";
import HeroContainer from "../../shared/HeroContainer";
import { GeneratorProps } from "../../../types";

const Generator = ({ jsonData, handleJsonChange, error }: GeneratorProps) => (
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
      sx={{ bgcolor: "#ffffff" }}
    />
  </HeroContainer>
);

export default Generator;
