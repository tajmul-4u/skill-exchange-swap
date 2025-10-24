import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation } from "react-router";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const initialEmail = location.state?.email || "";
  const [email, setEmail] = useState(initialEmail);

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      toast(" Password reset email sent!");
      window.location.href = "https://mail.google.com"; // Redirect to Gmail
    } catch (error) {
      toast(" Failed to send reset email");
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-indigo-100">
      <form
        onSubmit={handleReset}
        className="bg-white p-8 rounded-lg shadow-lg w-80 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4 text-teal-400">Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 mb-4 text-teal-200 border-amber-200"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
