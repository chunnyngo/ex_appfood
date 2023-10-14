import express from "express";
import userRoute from "./user.js";
import restaurantRoute from "./restaurant.js";
const rootRoute = express.Router();
rootRoute.use("/user", userRoute);
rootRoute.use("/restaurant", restaurantRoute);
export default rootRoute;
