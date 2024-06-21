import { useState } from "react";
import useForm from "../hooks/useForm";
import "../styles/JobApplicationForm.css";

const JobApplicationForm = () => {
  const { values, errors, handleChange, handleCheckboxChange, handleSubmit } =
    useForm(submitForm);
  const [position, setPosition] = useState("");

  function submitForm() {
    alert(JSON.stringify(values, null, 2));
  }

  const handlePositionChange = (e) => {
    handleChange(e);
    setPosition(e.target.value);
  };

  return (
    <form className="job-application-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={values.fullName || ""}
          onChange={handleChange}
          required
        />
        {errors.fullName && <p className="error">{errors.fullName}</p>}
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={values.email || ""}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="number"
          name="phoneNumber"
          value={values.phoneNumber || ""}
          onChange={handleChange}
          required
        />
        {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
      </div>

      <div className="form-group">
        <label>Applying for Position</label>
        <select
          name="position"
          value={values.position || ""}
          onChange={handlePositionChange}
          required
        >
          <option value="">Select...</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Manager">Manager</option>
        </select>
      </div>

      {(position === "Developer" || position === "Designer") && (
        <div className="form-group">
          <label>Relevant Experience (years)</label>
          <input
            type="number"
            name="experience"
            value={values.experience || ""}
            onChange={handleChange}
            required
          />
          {errors.experience && <p className="error">{errors.experience}</p>}
        </div>
      )}

      {position === "Designer" && (
        <div className="form-group">
          <label>Portfolio URL</label>
          <input
            type="text"
            name="portfolioURL"
            value={values.portfolioURL || ""}
            onChange={handleChange}
            required
          />
          {errors.portfolioURL && (
            <p className="error">{errors.portfolioURL}</p>
          )}
        </div>
      )}

      {position === "Manager" && (
        <div className="form-group">
          <label>Management Experience</label>
          <input
            type="text"
            name="managementExperience"
            value={values.managementExperience || ""}
            onChange={handleChange}
            required
          />
          {errors.managementExperience && (
            <p className="error">{errors.managementExperience}</p>
          )}
        </div>
      )}

      <div className="form-group">
        <label>Additional Skills</label>
        <div className="checkbox-group">
          {["JavaScript", "CSS", "Python"].map((skill) => (
            <label key={skill}>
              <input
                type="checkbox"
                name="additionalSkills"
                value={skill}
                onChange={handleCheckboxChange}
              />
              {skill}
            </label>
          ))}
        </div>
        {errors.additionalSkills && (
          <p className="error">{errors.additionalSkills}</p>
        )}
      </div>

      <div className="form-group">
        <label>Preferred Interview Time</label>
        <input
          type="datetime-local"
          name="interviewTime"
          value={values.interviewTime || ""}
          onChange={handleChange}
          required
        />
        {errors.interviewTime && (
          <p className="error">{errors.interviewTime}</p>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default JobApplicationForm;
