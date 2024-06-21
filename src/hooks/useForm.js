import { useState, useEffect } from "react";

const useForm = (callback) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      callback();
    }
  }, [errors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    if (checked) {
      setValues({ ...values, [name]: [...(values[name] || []), value] });
    } else {
      setValues({
        ...values,
        [name]: values[name].filter((item) => item !== value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
  };

  const validate = (values) => {
    let errors = {};
    if (!values.fullName) {
      errors.fullName = "Full Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Phone Number is required";
    } else if (isNaN(values.phoneNumber)) {
      errors.phoneNumber = "Phone Number must be a valid number";
    }
    if (
      (values.position === "Developer" || values.position === "Designer") &&
      !values.experience
    ) {
      errors.experience = "Relevant Experience is required";
    } else if (values.experience <= 0) {
      errors.experience = "Experience must be greater than 0";
    }
    if (values.position === "Designer" && !values.portfolioURL) {
      errors.portfolioURL = "Portfolio URL is required";
    } else if (
      values.position === "Designer" &&
      !/^(ftp|http|https):\/\/[^ "]+$/.test(values.portfolioURL)
    ) {
      errors.portfolioURL = "Portfolio URL is invalid";
    }
    if (values.position === "Manager" && !values.managementExperience) {
      errors.managementExperience = "Management Experience is required";
    }
    if (!values.additionalSkills || values.additionalSkills.length === 0) {
      errors.additionalSkills = "At least one skill must be selected";
    }
    if (!values.interviewTime) {
      errors.interviewTime = "Preferred Interview Time is required";
    }
    return errors;
  };

  return {
    values,
    errors,
    handleChange,
    handleCheckboxChange,
    handleSubmit,
  };
};

export default useForm;
