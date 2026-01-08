import HeroContainer from "../../shared/HeroContainer";
import Field from "./Field/Field";
import { FormData } from "../../../types";

const Form = ({ fields }: FormData) => {
  return (
    <HeroContainer title="Generated Form:">
      {fields.map((field, i) => (
        <Field key={i} {...field} />
      ))}
    </HeroContainer>
  );
};

export default Form;
