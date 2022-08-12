import * as Yup from "yup";

export const initialBillingAddressValues = {
  country: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zip: "",
  default: false,
};

export const billingAddressValidation = Yup.object().shape({
  country: Yup.string().required("Country is Required"),
  address1: Yup.string().required("Address 1 is Required"),
  city: Yup.string().required("City is Required"),
  state: Yup.string().required("State is Required"),
  zip: Yup.string().required("Zip is Required"),
});
