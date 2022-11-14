import express, { Express, NextFunction, Request, Response } from "express";

interface IReqBody {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

/**
 *
 * @param reqBody IReqBody
 * @returns Boolean
 */
const isRequired = (reqBody: IReqBody): boolean => {
  return (
    !reqBody.email ||
    !reqBody.username ||
    !reqBody.password ||
    !reqBody.confirmPassword ||
    reqBody.email === "" ||
    reqBody.username === "" ||
    reqBody.password === "" ||
    reqBody.confirmPassword === ""
  );
};

/**
 *
 * @param email String
 * @returns Boolean
 */
const isEmailValid = (email: string): boolean => {
  const isValid: boolean =
    email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) !== null;

  return isValid;
};

/**
 *
 * @param username String
 * @returns Boolean
 */
const isUsernameValid = (username: string): boolean => {
  const isValid: boolean = username.match(/^[a-zA-Z0-9]+$/) !== null;

  return isValid;
};

/**
 *
 * @param pwd String
 * @param confirmPwd String
 * @returns boolean
 */
const matchPassword = (pwd: string, confirmPwd: string): boolean => {
  return pwd === confirmPwd;
};

/**
 * password must contains at least: 6 characters, 1 lowercase letter, 1 uppercase letter, 1 symbol as !@#$%^&* and 1 number
 * @param pwd String
 * @returns Boolean
 */
const isPasswordValid = (pwd: string): boolean => {
  const isValid: boolean =
    pwd.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,20}$/) !==
    null;
  return isValid;
};

/**
 * Middleware
 */
const isFieldsValid = (
  req: Request,
  res: Response,
  next: NextFunction
): express.Response<any, Record<string, any>> | undefined => {
  const { email, username, password, confirmPassword }: IReqBody = req.body;

  if (isRequired(req.body))
    return res.status(403).send({
      message: "Email ,username, password and confirmPassword are required.",
    });

  if (!isEmailValid(email))
    return res.status(403).send({
      message: "Invalid email.",
    });

  if (!isUsernameValid(username))
    return res.status(403).send({
      message: "Invalid username.",
    });

  if (!matchPassword(password, confirmPassword))
    return res.status(403).send({
      message: "mismatch password.",
    });

  if (!isPasswordValid(password))
    return res.status(403).send({
      message:
        "Invalid password: password must contains at least: 6 characters, 1 lowercase letter, 1 uppercase letter, 1 symbol as !@#$%^&* and 1 number.",
    });

  next();
};

module.exports = isFieldsValid;
