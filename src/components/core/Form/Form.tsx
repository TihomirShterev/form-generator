import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Box, Button } from "@mui/material";
import HeroContainer from "../../shared/HeroContainer";
import Field from "./Field/Field";
import { FormData } from "../../../types";

const Form = ({ fields }: FormData) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  useEffect(() => {
    reset({});
  }, [fields, reset]);

  const onSubmit = (data: { [key: string]: string | boolean | null }) => {
    console.log(JSON.stringify(data, null, 2));
    reset({});
  };

  const filteredFields = fields.filter(({ isVisible }) => {
    return isVisible === undefined || watch(isVisible.name) === isVisible.value;
  });

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
    </HeroContainer>
  );
};

export default Form;
