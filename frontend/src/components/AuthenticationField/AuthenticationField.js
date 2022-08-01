import { ErrorMessage, Field } from "formik";
import React from "react";

import "./AuthenticationField.css";

function AuthenticationField({ label, type, id, name, placeholder }) {
  return (
    <span className="authenticationField">
      <div className="col-12">
        <label htmlFor={id} className="form-label">
          {label}
        </label>
        <Field
          type={type}
          className="form-control form-control-update"
          id={id}
          name={name}
          placeholder={placeholder}
        />

        <ErrorMessage name={name} component="div" className="error-msg" />
      </div>
    </span>
  );
}

export default AuthenticationField;
