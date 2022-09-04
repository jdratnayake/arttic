import * as Yup from "yup";

export const initialReportValues = {
  newDescription: "",
  reportCategory: '1',
  reportpostId:'',
};

export const reportDescriptionValidation = Yup.object().shape({
  newDescription: Yup.string().required("Description is Required"),
});
