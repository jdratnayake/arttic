import * as Yup from "yup";

export const initialPasswd = {
  curPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export const passwdValidation = Yup.object().shape({
  curPassword: Yup.string().required("Current password is Required"),
  newPassword: Yup.string()
    .required("New password is Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  confirmPassword: Yup.string()
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.newPassword === value;
    })
    .required("Confirm Password is Required"),
});