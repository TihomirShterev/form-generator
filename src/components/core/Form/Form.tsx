import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Alert, Box, Button, Snackbar } from "@mui/material";
import HeroContainer from "../../shared/HeroContainer";
import Field from "./Field/Field";
import { AUTO_SAVE_FORM_DATA, FORM_DATA_KEY } from "../../../utils/constants";
import { useAutoFill } from "../../../hooks/useAutoFill";
import { FormData, FormValues } from "../../../types";

const Form = ({ fields }: FormData) => {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
    watch,
    control,
    setValue,
  } = useForm<FormValues>({
    defaultValues: AUTO_SAVE_FORM_DATA ? JSON.parse(AUTO_SAVE_FORM_DATA) : {},
  });

  const filteredFields = fields.filter(
    ({ isVisible }) =>
      isVisible === undefined || watch(isVisible.name) === isVisible.value
  );

  const watchedValues = useWatch({ control });
  useAutoFill(watchedValues.zipCode as string, setValue);

  // Auto-save to localStorage whenever a value changes
  useEffect(() => {
    if (watchedValues) {
      const debounceSave = setTimeout(() => {
        localStorage.setItem(FORM_DATA_KEY, JSON.stringify(watchedValues));
      }, 1000);

      return () => clearTimeout(debounceSave);
    }
  }, [watchedValues]);

  const onSubmit = (data: FormValues) => {
    console.log(JSON.stringify(data, null, 2));
    setOpen(true);
    localStorage.removeItem(FORM_DATA_KEY);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const handleClose = () => setOpen(false);

  return (
    <HeroContainer title="Generated Form:">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            p: 2,
            borderRadius: "2px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            bgcolor: "#f2f2f2",
          }}
        >
          {filteredFields.map((field, i) => (
            <Field key={i} field={field} register={register} errors={errors} />
          ))}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ alignSelf: "center" }}
          >
            Submit
          </Button>
        </Box>
      </form>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" variant="filled">
          Successfully submitted.
        </Alert>
      </Snackbar>
    </HeroContainer>
  );
};

export default Form;
