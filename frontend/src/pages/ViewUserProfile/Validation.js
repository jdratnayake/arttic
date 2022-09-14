import * as Yup from "yup";

export const initialReportValues = {
  newDescription: "",
  reportCategory: '1',
};

export const reportDescriptionValidation = Yup.object().shape({
  newDescription: Yup.string().required("Description is Required"),
});
