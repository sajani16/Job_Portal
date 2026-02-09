import asyncHandler from "../../middlewares/asyncHandler.js";

export const register = asyncHandler(async (req, res) => {
  res.json({ message: "Register successfully" });
});

export const verifyOtp = asyncHandler(async (req, res) => {
  res.json({ message: "Verified Successfully." });
});

export const login = asyncHandler(async (req, res) => {
  res.json({ message: "Login successfully" });
});
export const forgotPassword = asyncHandler(async (req, res) => {
  res.json({ message: "forgot password" });
});

export const resetPassword = asyncHandler(async (req, res) => {
  res.json({ message: "reset password" });
});
