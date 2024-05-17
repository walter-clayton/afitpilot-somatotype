// Declaration merging

import express from "express";
import { IReqUser } from "../interfaces/interfaces";
export {};

declare global {
  namespace Express {
    interface Request {
      user: IReqUser;
      user_id: number;
    }
  }
}
