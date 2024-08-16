import React, { useState } from "react";

interface FormEvent {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp: React.FC = () => {
  const [formValues, setFormValues] = useState<FormEvent>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { email: "", password: "", confirmPassword: "" };

    if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (formValues.password !== formValues.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // handle successful form submission here
      setTimeout(() => {
        setIsSubmitting(false);
        setFormValues({ email: "", password: "", confirmPassword: "" });
      }, 1000); // simulate async submission
    }
  };

  return (
    <div>
      <h1>Sign Up Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </label>
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleChange}
            />
          </label>
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
