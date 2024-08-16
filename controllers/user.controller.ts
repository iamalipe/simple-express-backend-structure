import { Request, Response } from "express";
import { db } from "../db/db";

export const createUser = async (req: Request, res: Response) => {
  console.log("createUser", req.body);

  const data = await db.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    },
  });

  res.json({ message: "create successfully", data: data });
};

export const updateUser = async () => {};

export const deleteUser = async () => {};

export const getUser = async (req: Request, res: Response) => {
  const data = await db.user.findMany();

  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  res.json({ data: data, ip1: ip, ip: req?.ip, ips: req?.ips });
};
