import * as Yup from "yup";

export const initialRegistrationValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  terms: false,
};

export const registrationValidation = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Email is not Valid").required("Email is Required"),
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
  terms: Yup.boolean().oneOf(
    [true],
    "You must Accept the Terms and Conditions"
  ),
});
