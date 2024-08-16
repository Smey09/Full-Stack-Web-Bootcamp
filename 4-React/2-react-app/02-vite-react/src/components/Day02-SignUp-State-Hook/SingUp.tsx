import React, { useState } from "react";

interface FormEvent {
  email: string;
  password: string;
  comformPassword: string;
}

const SignUp: React.FC = () => {
  const [] = useState<FormEvent[]>([]);

  return (
    <div>
      <div>
        <h1>sign up Form</h1>
      </div>
      <div>
        <label>
          email : <input name="email" />
        </label>
      </div>
      <div>
        <label>
          password : <input name="password" />
        </label>
      </div>
      <div>
        <label>
          confirm password : <input name="comfirmPassword" />
        </label>
      </div>
      <button>
        <button
          type="submit"
          className=" border-solid border-2 border-red-500 bg-blue-400 rounded-md px-2"
        >
          Submit
        </button>
      </button>
    </div>
  );
};

export default SignUp;
