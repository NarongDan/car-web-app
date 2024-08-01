import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import validateLogin from "../validtors/validate-login";

const initialInput = {
  email: "",
  password: "",
};

const initialInputError = {
  email: "",
  password: "",
};

export default function Login() {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputError(initialInputError);
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();

      // validate input
      const error = validateLogin(input);

      if (error) {
        setInputError(error);
        return;
      }

      await login(input);
      navigate("/");
      toast.success("Login successful");
    } catch (error) {
      if (error instanceof AxiosError) {
        const message =
          error.response.status === 400
            ? "Invalid email or password"
            : "Internal server error";
        return toast.error(message);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md space-y-6">
        <div className="">
          <h3 className="text-center text-2xl font-bold">Login</h3>
        </div>
        <form onSubmit={handleSubmitForm}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              name="email"
              placeholder="Enter email"
              value={input.email}
              onChange={handleChange}
            />
            <p className="text-red-500 mt-1"> {inputError.email} </p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              name="password"
              placeholder="Password"
              value={input.password}
              onChange={handleChange}
            />
            <p className="text-red-500 mt-1">{inputError.password}</p>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
