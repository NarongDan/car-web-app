import AuthContextProvider from "./contexts/auth-context";
import Router from "./routes";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <AuthContextProvider>
      <Router />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </AuthContextProvider>
  );
}
