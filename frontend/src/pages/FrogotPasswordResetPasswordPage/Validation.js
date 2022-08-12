import * as Yup from "yup";

import { API_URL } from "../../constants/globalConstants";

export const initialPasswordResetValues = {
  password: "",
  confirmPassword: "",
};

export const passwordResetValidation = Yup.object().shape({
  password: Yup.string()
    .required("Password is Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  confirmPassword: Yup.string()
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    })
    .required("Confirm Password is Required"),
});
