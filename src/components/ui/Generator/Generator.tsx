import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Alert, Box, Button, Snackbar } from "@mui/material";
import ContainerBox from "../../core/ContainerBox";
import Field from "./Field/Field";
import { AUTO_SAVE_FORM_DATA, FORM_DATA_KEY } from "../../../utils/constants";
import { useAutoFill } from "../../../hooks/useAutoFill";
import { GeneratorProps, FormValues } from "../../../types/types";

const Generator = ({ fields }: GeneratorProps) => {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
    watch,
    control,
    setValue,
    setError,
    clearErrors,
    resetField,
  } = useForm<FormValues>({
    defaultValues: AUTO_SAVE_FORM_DATA ? JSON.parse(AUTO_SAVE_FORM_DATA) : {},
  });

  const filteredFields = fields.filter(
    ({ isVisible }) =>
      isVisible === undefined || watch(isVisible.name) === isVisible.value
  );

  const watchedValues = useWatch({ control });

  useAutoFill({
    zipCode: watchedValues.zipCode as string,
    setValue,
    setError,
    clearErrors,
    resetField,
  });

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
    <ContainerBox title="Generated Form:">
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
    </ContainerBox>
  );
};

export default Generator;
