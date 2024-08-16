import express from "express";
import { createUser, getUser } from "../controllers/user.controller";
export const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.get("/", getUser);
