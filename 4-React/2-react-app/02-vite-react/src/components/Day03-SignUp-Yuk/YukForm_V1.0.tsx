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
    <div>
      <h1>Sign Up Form</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex mb-4">
            <p className="w-52">Email :</p>
            <input
              {...register("email")}
              className="flex-1 border border-gray-300 p-2 rounded-md"
              placeholder="Input Your Gmail..."
            />
            {errors.email && (
              <p className="text-red-500 w-96">{errors.email.message}</p>
            )}
            {fieldSuccess.email && !errors.email && (
              <p className="text-blue-700 w-96">{fieldSuccess.email}</p>
            )}
          </div>
          <div className="flex mb-4">
            <p className="w-52">Password :</p>
            <input
              type="password"
              {...register("password")}
              className="flex-1 border border-gray-300 p-2 rounded-md"
              placeholder="Input Password..."
            />
            {errors.password && (
              <p className="text-red-500 w-96">{errors.password.message}</p>
            )}
            {fieldSuccess.password && !errors.password && (
              <p className="text-blue-700 w-96">{fieldSuccess.password}</p>
            )}
          </div>
          <div className="flex mb-4">
            <p className="w-52">Confirm Password :</p>
            <input
              type="password"
              {...register("confirmPassword")}
              className="flex-1 border border-gray-300 p-2 rounded-md"
              placeholder="Input Confirm Password..."
            />
            {errors.confirmPassword && (
              <p className="text-red-500 w-96">
                {errors.confirmPassword.message}
              </p>
            )}
            {fieldSuccess.confirmPassword && !errors.confirmPassword && (
              <p className="text-blue-700 w-96">
                {fieldSuccess.confirmPassword}
              </p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className={`border-solid border-2 ${
                isFormSubmitted
                  ? "border-green-500 bg-green-400"
                  : "border-red-500 bg-blue-400"
              } rounded-md px-2`}
              disabled={isSubmitting}
            >
              {isFormSubmitted ? "Success!" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default YukForm;
