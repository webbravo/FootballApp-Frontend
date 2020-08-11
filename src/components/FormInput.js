import React from "react";
import { useField } from "formik";
import FormErrorInput from "./FormErrorInput";
import Input from "./../components/common/Input";

const FormInput = ({ ariaLabel, name, type, placeholder }) => {
  const [field, meta] = useField(name);
  return (
    <>
      <label htmlFor="">
        {meta.touched && meta.error ? (
          <FormErrorInput text={meta.error}></FormErrorInput>
        ) : null}
      </label>
      <Input
        field={field}
        ariaLabel={ariaLabel}
        name={field.name}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};

export default FormInput;
