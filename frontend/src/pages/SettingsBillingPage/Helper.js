import axios from "axios";

import { getUserId } from "../../constants/globalFunctions";

export const registerBillingAddress = async (data, { resetForm }) => {
  const userId = getUserId();
  const inputData = {
    userId: userId,
    country: data.country,
    addressLine1: data.address1,
    addressLine2: data.address2,
    city: data.city,
    state: data.state,
    zipCode: data.zip,
    isDefault: data.default,
  };
  console.log(inputData);
  resetForm();
};
