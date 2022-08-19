import * as Yup from "yup";

// Formik - START
export const initialAdvertismentValues = {
  category: "0",
};

export const advertismentValidation = Yup.object().shape({
  category: Yup.string().test(
    "category-empty",
    "Category is required",
    function (value) {
      return "0" !== value;
    }
  ),
});
// Formik - END

// Custom validation functions - START
export const removeTime = (date = new Date()) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

export const getDifferenceInDays = (date1, date2) => {
  return (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24);
};
// Custom validation functions - END
