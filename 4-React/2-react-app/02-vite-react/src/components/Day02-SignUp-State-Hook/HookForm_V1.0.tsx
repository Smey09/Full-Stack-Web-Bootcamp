import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const HookForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const { email, password, confirmPassword } = data;

    if (!validateEmail(email)) {
      console.log("Invalid email address");
      return;
    } else if (password.length < 8) {
      console.log("least 8 characters");
      return;
    } else if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    } else {
      console.log("Successfully submitted", { email, password });
      reset(); // Reset form fields
    }
  };

  const validateEmail = (email: string) => {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailRegex.test(email);
  };

  return (
    <div>
      <h1>Sign Up Form</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex mb-4">
            <p className="w-52">Email :</p>
            <input
              {...register("email", { required: "Email is required" })}
              className="flex-1 border border-gray-300 p-2 rounded-md"
              placeholder="Input Your Gmail..."
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="flex mb-4">
            <p className="w-52">Password :</p>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "least 8 characters ",
                },
              })}
              className="flex-1 border border-gray-300 p-2 rounded-md"
              placeholder="Input Password..."
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div className="flex mb-4">
            <p className="w-52">Confirm Password :</p>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              className="flex-1 border border-gray-300 p-2 rounded-md"
              placeholder="Input Confirm Password..."
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
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

export default HookForm;
