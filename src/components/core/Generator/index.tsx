import { TextField } from "@mui/material";
import HeroContainer from "../../shared/HeroContainer";

interface GeneratorProps {
  jsonData: any;
  handleJsonChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}

const Generator = ({ jsonData, handleJsonChange }: GeneratorProps) => {
  return (
    <HeroContainer title="JSON Structure:">
      <TextField
        fullWidth
        multiline
        minRows={5}
        maxRows={15}
        onChange={handleJsonChange}
        value={jsonData}
      />
    </HeroContainer>
  );
};

export default Generator;
