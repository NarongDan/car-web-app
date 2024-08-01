import { Suspense } from "react";
import AuthContextProvider from "./contexts/auth-context";
import Router from "./routes";
import { ToastContainer } from "react-toastify";
import LoadingSpinner from "./components/LoadingSpinner";

export default function App() {
  return (
    <AuthContextProvider>
      <Suspense fallback={<LoadingSpinner />}>
        <Router />
        <ToastContainer position="bottom-right" autoClose={3000} />
      </Suspense>
    </AuthContextProvider>
  );
}
