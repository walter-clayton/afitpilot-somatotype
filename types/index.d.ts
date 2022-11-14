// Declaration merging

import express from "express";
import { IUser } from "../interfaces/interfaces";
export {};

declare global {
  namespace Express {
    interface Request {
        user: IUser
    }
  }
}