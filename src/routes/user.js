import express from "express";
import { login, order, register } from "../controllers/userCtrl.js";
import { protect } from "../controllers/tokenCtrl.js";

const userRoute = express.Router();

userRoute.post("/login", login);

userRoute.post("/register", register);

// XỬ LÝ USER ĐẶT MÓN ----------------------
userRoute.post("/order/:food_id", protect, order); // Đặt món

export default userRoute;
