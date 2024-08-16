import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormInputs {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormInputs>();
  const password = watch("password");

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    setTimeout(() => {
      reset();
    }, 1000); // simulate async submission
  };

  return (
    <div>
      <h1>Sign Up Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            Email:
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email format",
                },
              })}
            />
          </label>
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
            />
          </label>
        </div>
        <div>
          <label>
            Confirm Password:
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
          </label>
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
        </div>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
