import { Schema } from "mongoose";

export interface IRelationShip {
  type: Schema.Types.ObjectId;
  ref: string;
}
export interface IUser {
  email: string;
  username: string;
  password: string;
  somatotypes: IRelationShip;
  anthropometric: IAnthropometric
}

export interface ISomatotype {
  endomorph: number;
  mesomorph: number;
  ectomorph: number;
  users: IRelationShip;
  anthropometric: IAnthropometric
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
  users: IRelationShip;
  somatotype: IRelationShip;
}