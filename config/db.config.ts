import { IComparison } from "../interfaces/interfaces";

const dotenv = require("dotenv");
dotenv.config();

interface IKyes {
  mongoURI: string;
  mongoDbName: string;
}

const keys: IKyes = {
  mongoURI: process.env.MONGODB_URI!,
  mongoDbName: process.env.MONGODB_DBNAME!,
};

const comparisons: IComparison[] = [
  {
    group: "Tribe",
    gender: "Male",
    name: "Nilotes",
    endo: 2,
    meso: 3,
    ecto: 6,
  },
  {
    group: "Tribe",
    gender: "Male",
    name: "Manu",
    endo: 2,
    meso: 7,
    ecto: 2,
  },
  {
    group: "Tribe",
    gender: "Female",
    name: "Manu",
    endo: 2,
    meso: 5,
    ecto: 2,
  },
  {
    group: "Tribe",
    gender: "Male",
    name: "Eskimo",
    endo: 4,
    meso: 6,
    ecto: 2,
  },
  {
    group: "Tribe",
    gender: "Female",
    name: "Eskimo",
    endo: 6,
    meso: 4,
    ecto: 1,
  },
  {
    group: "Tribe",
    gender: "Male",
    name: "Brahmin",
    endo: 2,
    meso: 4,
    ecto: 4,
  },
  {
    group: "Sport",
    gender: "Male",
    name: "Rugby",
    endo: 3,
    meso: 6,
    ecto: 1,
  },
  {
    group: "Sport",
    gender: "Male",
    name: "Weightlifting",
    endo: 2,
    meso: 7,
    ecto: 1,
  },
  {
    group: "Sport",
    gender: "Male",
    name: "Football",
    endo: 2,
    meso: 5,
    ecto: 2,
  },
  {
    group: "Sport",
    gender: "Male",
    name: "Sumo",
    endo: 5,
    meso: 6,
    ecto: 1,
  },
  {
    group: "Sport",
    gender: "Female",
    name: "Sumo",
    endo: 7,
    meso: 5,
    ecto: 1,
  },
  {
    group: "Sport",
    gender: "Male",
    name: "Bodybuilder",
    endo: 1,
    meso: 9,
    ecto: 1,
  },
  {
    group: "Sport",
    gender: "Female",
    name: "Bodybuilder",
    endo: 2,
    meso: 5,
    ecto: 2,
  },
  {
    group: "Sport",
    gender: "Female",
    name: "Rower",
    endo: 3,
    meso: 5,
    ecto: 3,
  },
  {
    group: "Sport",
    gender: "Male",
    name: "Gymnast",
    endo: 1,
    meso: 6,
    ecto: 2,
  },
  {
    group: "Sport",
    gender: "Male",
    name: "Track Cyclist",
    endo: 2,
    meso: 5,
    ecto: 3,
  },
  {
    group: "Sport",
    gender: "Female",
    name: "Swimmer",
    endo: 2,
    meso: 4,
    ecto: 4,
  },
  {
    group: "Sport",
    gender: "Male",
    name: "Basketball",
    endo: 2,
    meso: 4,
    ecto: 4,
  },
  {
    group: "Sport",
    gender: "Female",
    name: "Basketball",
    endo: 4,
    meso: 4,
    ecto: 3,
  },
];

module.exports = { keys, comparisons };
