"use client";

import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, "Invalid email address"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Password must be at least 8 characters")
    .max(10, "Password must be at most 10 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Please confirm your password"),
});

const YukForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    trigger,
    watch,
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [fieldSuccess, setFieldSuccess] = useState<{ [key: string]: string }>(
    {}
  );
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const watchEmail = watch("email");
  const watchPassword = watch("password");
  const watchConfirmPassword = watch("confirmPassword");

  useEffect(() => {
    const validateField = async (field: keyof FormData) => {
      const result = await trigger(field);
      setFieldSuccess((prev) => ({
        ...prev,
        [field]: result ? "Success!" : "",
      }));
    };

    if (watchEmail !== undefined) {
      validateField("email");
    }

    if (watchPassword !== undefined) {
      validateField("password");
    }

    if (watchConfirmPassword !== undefined) {
      validateField("confirmPassword");
    }
  }, [watchEmail, watchPassword, watchConfirmPassword, trigger]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Successfully submitted", data);
    setIsFormSubmitted(true);
    reset();
    setTimeout(() => setIsFormSubmitted(false), 3000);
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-full max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Sign Up Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex mb-4 items-center">
          <label className="w-52" htmlFor="email">
            Email:
          </label>
          <input
            {...register("email")}
            className="flex-1 border border-gray-300 p-2 rounded-md"
            placeholder="Input Your Gmail..."
            id="email"
          />
          {errors.email && (
            <p className="text-red-500 w-96">{errors.email.message}</p>
          )}
          {fieldSuccess.email && !errors.email && (
            <p className="text-blue-700 w-96">{fieldSuccess.email}</p>
          )}
        </div>
        <div className="flex mb-4 items-center">
          <label className="w-52" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            {...register("password")}
            className="flex-1 border border-gray-300 p-2 rounded-md"
            placeholder="Input Password..."
            id="password"
          />
          {errors.password && (
            <p className="text-red-500 w-96">{errors.password.message}</p>
          )}
          {fieldSuccess.password && !errors.password && (
            <p className="text-blue-700 w-96">{fieldSuccess.password}</p>
          )}
        </div>
        <div className="flex mb-4 items-center">
          <label className="w-52" htmlFor="confirmPassword">
            Confirm Password:
          </label>
          <input
            type="password"
            {...register("confirmPassword")}
            className="flex-1 border border-gray-300 p-2 rounded-md"
            placeholder="Input Confirm Password..."
            id="confirmPassword"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 w-96">
              {errors.confirmPassword.message}
            </p>
          )}
          {fieldSuccess.confirmPassword && !errors.confirmPassword && (
            <p className="text-blue-700 w-96">{fieldSuccess.confirmPassword}</p>
          )}
        </div>
        <div className="text-center">
          <button
            type="submit"
            className={`border-solid border-2 ${
              isFormSubmitted
                ? "border-green-500 bg-green-400"
                : "border-red-500 bg-blue-400"
            } rounded-md px-4 py-2`}
            disabled={isSubmitting}
          >
            {isFormSubmitted ? "Success!" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default YukForm;
