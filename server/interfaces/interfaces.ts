import { ObjectId, Schema } from "mongoose";

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
  gender: string;
  mainColor: Number;
  somatotypes: IRelationShip[];
  anthropometrics: IAnthropometric[];
  avatars: IAvatar[];
  skippedTest: Boolean;
  createdAt: String;
  updatedAt: String;
}

export interface ISomatotype {
  endomorphy: number;
  mesomorphy: number;
  ectomorphy: number;
  titleSomatotype: String;
  codeSomatotype: String;
  users: IRelationShip[];
  anthropometric: IAnthropometric;
  avatar: IAvatar;
  createdAt: String;
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
  body_fat: number;
  users: IRelationShip[];
  somatotype: IRelationShip;
  createdAt: String;
  updatedAt: String;
}

export interface IData {
  somatotype: ISomatotype;
  anthropometric: IAnthropometric;
  avatar?: IAvatar;
  svgAvatar?: any;
  logo?: any;
}

export interface IComparison {
  group: string;
  gender: string;
  name: string;
  endo: number;
  meso: number;
  ecto: number;
}

export interface IAvatar {
  indexHair: Number;
  indexColorHair: Number;
  indexBeard: Number;
  indexColorSkin: Number;
  indexFace: Number;
  titleSoma: String;
  codeSoma: String;
  user: IUser;
  somatotype: ISomatotype;
  createdAt: String;
  updatedAt: String;
}
