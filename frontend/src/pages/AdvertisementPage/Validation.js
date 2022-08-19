import * as Yup from "yup";
import axios from "axios";

import { API_URL } from "../../constants/globalConstants";

export const initialAdvertismentValues = {
  category: "0",
  addImg: "",
  description: "",
};

export const advertismentValidation = Yup.object().shape({
  category: Yup.string().test(
    "category-empty",
    "Category is required",
    function (value) {
      return "0" !== value;
    }
  ),
  // addImg: Yup.mixed().required("A file is required"),
});
