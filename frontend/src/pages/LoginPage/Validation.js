import * as Yup from "yup";

export const initialLoginValues = {
  username: "",
  password: "",
};

export const loginValidation = Yup.object().shape({
  username: Yup.string().required("Email or Username is Required"),
  password: Yup.string()
    .required("Password is Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});
