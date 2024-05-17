import request from "supertest";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const app = require("../server.ts");
const User = require("../models/User");
const { setupDB } = require("../database");

const accessKey = process.env.ACCESS_KEY;
if (!accessKey) {
  throw new Error("ACCESS_KEY is not defined");
}

jest.setTimeout(120000);

describe("POST /users/register", () => {
  const uri: string = process.env.MONGODB_URI || "";
  beforeAll(async () => {
    await setupDB(uri);
  });
  afterAll(async () => {
    await mongoose.connection.close();
  });
  it("should register a new user", async () => {
    const user = await User.find({
      email: "test@examplesss.com",
    }).maxTimeMS(60000);
    console.log(user);
    const res = await request(app)
      .post("/users/register")
      .set("access_key", accessKey)
      .send({
        email: "test@examplesss.com",
        name: "Test User",
        skipTest: false,
        gender: "male",
        data: {
          somatotype: {
            endomorphy: 1,
            mesomorphy: 1,
            ectomorphy: 1,
            titleSomatotype: "Test Somatotype",
            codeSomatotype: "TS",
          },
          anthropometric: {
            height: 180,
            weight: 80,
            supraspinal_skinfold: 10,
            subscapular_skinfold: 10,
            tricep_skinfold: 10,
            femur_breadth: 10,
            humerus_breadth: 10,
            calf_girth: 10,
            bicep_girth: 10,
            body_fat: 10,
          },
          avatar: {
            indexHair: 1,
            indexColorHair: 1,
            indexBeard: 1,
            indexColorSkin: 1,
            indexFace: 1,
            titleSoma: "Test Soma",
            codeSoma: "TS",
          },
        },
      });

    console.log(res.body);

    expect(res.statusCode).toEqual(202);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual(
      "User registered successfully, check your email to get your generated password"
    );
    expect(res.body).toHaveProperty("dataSaved");
    expect(res.body.dataSaved).toEqual(true);
    expect(res.body).toHaveProperty("user");
    expect(res.body.user).toHaveProperty("token");
    expect(res.body.user).toHaveProperty("email");
    expect(res.body.user.email).toEqual("test@examplesss.com");
    expect(res.body.user).toHaveProperty("name");
    expect(res.body.user.name).toEqual("Test User");
    expect(res.body.user).toHaveProperty("gender");
    expect(res.body.user.gender).toEqual("male");
    expect(res.body.user).toHaveProperty("mainColor");
  });
});
