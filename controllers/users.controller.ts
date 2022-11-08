import { Request, Response } from "express";

interface IUsersCtrl {
  register?: (req: Request, res: Response) => void;
}

const usersCtrl: IUsersCtrl = {};

usersCtrl.register = async (req: Request, res: Response) => {
};

module.exports = usersCtrl;
