import * as Yup from "yup";
import axios from "axios";

import { API_URL } from "../../constants/globalConstants";

export const initialRegistrationValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  terms: false,
};

export const registrationValidation = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string()
    .email("Email is not Valid")
    .test(
      "email-unique",
      "Email Already Registered! Please Login",
      async (value) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
          console.log("Hi");
          const inputData = {
            email: value,
          };

          let response = await axios
            .post(API_URL + "/auth/emailCheck/", inputData)
            .then((response) => {
              return response.data.isUnique;
            });
          return response;
        }
      }
    )
    .required("Email is Required"),
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
