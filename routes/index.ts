import express from "express";
import { userRouter } from "./user.route";
export const mainRouter = express.Router();

mainRouter.use("/user", userRouter);
