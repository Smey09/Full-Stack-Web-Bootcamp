import React, { useState } from "react";

const StateInput: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    if (!validateEmail(email)) {
      console.log("Invalid email address", error);
      return;
    } else if (password.length < 8) {
      console.log("Password must be at least 8 characters long", error);
      return;
    } else if (password !== confirmPassword) {
      console.log("Passwords do not match", error);
      return;
    } else {
      setError(""); // Clear any previous errors
      setIsSubmitting(true); // Disable the button
      console.log("Successfully submitted", { email, password });
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  const validateEmail = (email: string) => {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailRegex.test(email);
  };

  return (
    <div>
      <h1>Sign Up Form 1</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex mb-4">
            <p className="w-52">Email :</p>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="flex-1 border border-gray-300 p-2 rounded-md"
              placeholder="Input Your Gmail..."
            />
          </div>
          <div className="flex mb-4">
            <p className="w-52">Password :</p>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="flex-1 border border-gray-300 p-2 rounded-md"
              placeholder="Input Password..."
            />
          </div>
          <div className="flex mb-4">
            <p className="w-52">Confirm Password :</p>
            <input
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="flex-1 border border-gray-300 p-2 rounded-md"
              placeholder="Input Confirm Password..."
            />
          </div>
          <div>
            <button
              type="submit"
              className="border-solid border-2 border-red-500 bg-blue-400 rounded-md px-2"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StateInput;
