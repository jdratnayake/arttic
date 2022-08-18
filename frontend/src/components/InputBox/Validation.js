import * as Yup from "yup";

export const initialLoginValues = {
  description: "",
};

export const InputBoxValidation = Yup.object().shape({
  description: Yup.string(),
});
