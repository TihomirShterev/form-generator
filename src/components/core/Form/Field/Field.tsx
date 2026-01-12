import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { FieldProps } from "../../../../types";
import { customize } from "../../../../utils/validation";

const Field = ({
  field: { type, name, label, placeholder, options, validation, fields },
  register,
  errors,
}: FieldProps) => {
  const errorMessage = errors[name]?.message as string;

  switch (type) {
    case "text":
    case "textarea":
      return (
        <TextField
          label={label}
          placeholder={placeholder}
          fullWidth
          multiline={type === "textarea"}
          {...register(name, customize(validation))}
          error={!!errorMessage}
          helperText={errorMessage}
          sx={{ mb: 2, "& .MuiInputBase-root": { bgcolor: "#ffffff" } }}
          slotProps={{ inputLabel: { shrink: true, sx: { color: "#1976d2" } } }}
        />
      );
    case "dropdown":
      return (
        <TextField
          select
          label={label}
          fullWidth
          defaultValue=""
          {...register(name, validation)}
          error={!!errorMessage}
          helperText={errorMessage}
          sx={{ "& .MuiInputBase-root": { bgcolor: "#ffffff" } }}
          slotProps={{ inputLabel: { shrink: true, sx: { color: "#1976d2" } } }}
        >
          {options?.map((option, i) => (
            <MenuItem key={i} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      );
    case "checkbox":
      return (
        <FormControl error={!!errorMessage}>
          <FormControlLabel
            control={<Checkbox {...register(name, validation)} />}
            label={label}
          />
          {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
        </FormControl>
      );
    case "radio":
      return (
        <FormControl error={!!errorMessage}>
          <FormLabel>{label}</FormLabel>
          <RadioGroup>
            {options?.map((option, i) => (
              <FormControlLabel
                key={i}
                value={option.value}
                control={<Radio {...register(name, validation)} />}
                label={option.label}
              />
            ))}
          </RadioGroup>
          {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
        </FormControl>
      );
    case "group":
      return (
        <Box
          sx={{ p: 2, mb: 2, border: "1px solid #cccccc", borderRadius: "4px" }}
        >
          <InputLabel sx={{ mb: 2 }}>{label}</InputLabel>
          {fields?.map((field, i) => (
            <Field key={i} field={field} register={register} errors={errors} />
          ))}
        </Box>
      );
    default:
      return null;
  }
};

export default Field;
