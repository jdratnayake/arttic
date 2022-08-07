import * as Yup from "yup";

export const initialFrogotPasswordUsernameValues = {
  username: "",
};

export const frogotPasswordUsernameValidation = Yup.object().shape({
  username: Yup.string().required("Email or Username is Required"),
});
