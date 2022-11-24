import { Schema } from "mongoose";

export interface IReqUser {
  email: string;
  name: string;
}

export interface IRelationShip {
  type: Schema.Types.ObjectId;
  ref: string;
}
export interface IUser {
  email: string;
  name: string;
  password: string;
  somatotypes: IRelationShip[];
  anthropometrics: IAnthropometric[];
  createdAtt: String;
  updatedAt: String;
}

export interface ISomatotype {
  endomorphy: number;
  mesomorphy: number;
  ectomorphy: number;
  users: IRelationShip[];
  anthropometric: IAnthropometric;
  createdAtt: String;
  updatedAt: String;
}

export interface IAnthropometric {
  height: number;
  weight: number;
  supraspinal_skinfold: number;
  subscapular_skinfold: number;
  tricep_skinfold: number;
  femur_breadth: number;
  humerus_breadth: number;
  calf_girth: number;
  bicep_girth: number;
  users: IRelationShip[];
  somatotype: IRelationShip;
  createdAtt: String;
  updatedAt: String;
}

export interface IData {
  somatotype: ISomatotype;
  anthropometric: IAnthropometric;
}
