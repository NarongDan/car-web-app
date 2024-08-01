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
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4 fw-bolder">Login</h3>
          <form onSubmit={handleSubmitForm}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
                value={input.email}
                onChange={handleChange}
              />
              <p className="text-danger mt-1"> {inputError.email} </p>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={input.password}
                onChange={handleChange}
              />
            </div>
            <p className="text-danger mt-1">{inputError.password}</p>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
