import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { IField } from "../../../../types";

const Field = ({ type, label, placeholder, options }: IField) => {
  switch (type) {
    case "text":
    case "textarea":
      return (
        <TextField
          label={label}
          placeholder={placeholder}
          fullWidth
          multiline={type === "textarea"}
        />
      );
    case "dropdown":
      return (
        <TextField select label={label} fullWidth defaultValue="">
          {options?.map((option, i) => (
            <MenuItem key={i} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      );
    case "checkbox":
      return (
        <FormControl>
          <FormControlLabel control={<Checkbox />} label={label} />
        </FormControl>
      );
    case "radio":
      return (
        <FormControl>
          <FormLabel>{label}</FormLabel>
          <RadioGroup>
            {options?.map((option, i) => (
              <FormControlLabel
                key={i}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      );
    default:
      return null;
  }
};

export default Field;
